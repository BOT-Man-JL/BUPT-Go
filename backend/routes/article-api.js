'use strict';
const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;
const Article = require('../model/article').model;
const ArticleMeta = require('../model/article-meta').model;

const errBadModelSave = 'Unable to save this article';
const errInvalidUserName = 'Invalid user name';
const errInvalidArticleId = 'Invalid article Id';
const errInvalidArticleImage = 'Invalid article image';
const errInvalidArticleMeta = 'Invalid article meta data';
const errNoArticle = 'No such article';
const errNoLogin = 'Please login first';

// Get

router.get('/', function (req, res) {
    const id = req.query.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({ err: errInvalidArticleId });
    }

    Article.findById(id).then(function (doc) {
        if (!doc) {
            return res.status(400).send({ err: errNoArticle });
        }
        res.send(doc);

    }).catch(function (err) {
        res.status(500).send({ err });
        console.error(err);
    });
});

router.get('/user', function (req, res) {
    const name = req.query.name;
    if (!name) {
        return res.status(400).send({ err: errInvalidUserName });
    }

    const query = { author: name };
    Article.find(query)
        .select({ _id: 1, title: 1, timestamp: 1 })
        .sort({ timestamp: -1 })
        .then(function (docs) {
            // Note: (docs.length == 0) is not an error
            res.send(docs);

        }).catch(function (err) {
            res.status(500).send({ err });
            console.error(err);
        });
});

router.get('/search', function (req, res) {
    const query = {};
    if (req.query.category)
        query.category = req.query.category;
    if (req.query.area)
        query.area = req.query.area;
    if (req.query.date) {
        query.dateBeg = { $lt: req.query.date };
        query.dateEnd = { $gt: req.query.date };
    }

    Article.find(query)
        .select({ _id: 1, author: 1, timestamp: 1, meta: 1, title: 1, img: 1 })
        .then(function (docs) {
            res.send(docs);
            console.log('query search');
        }).catch(function (err) {
            res.status(500).send({ err });
            console.error(err);
        });
});

// Post

router.post('/submit', function (req, res) {
    const userName = req.signedCookies['userNameSigned'];
    if (!userName) {
        return res.status(401).send({ err: errNoLogin });
    }

    const id = req.body.id;
    if (id && !ObjectId.isValid(id)) {
        return res.status(400).send({ err: errInvalidArticleId });
    }

    if (req.file && req.file.mimetype.indexOf('image/') != 0) {
        return res.status(400).send({ err: errInvalidArticleImage });
    }

    const articleMeta = {
        category: req.body.category,
        area: req.body.area,
        dateBeg: req.body.dateBeg,
        dateEnd: req.body.dateEnd,
        location: req.body.location,
        contact: req.body.contact,
        cost: req.body.cost
    };

    if (!articleMeta.category || !articleMeta.area ||
        !articleMeta.dateBeg || !articleMeta.dateEnd) {
        return res.status(400).send({ err: errInvalidArticleMeta });
    }

    const article = {
        author: userName,
        timestamp: new Date(),
        meta: new ArticleMeta(articleMeta),
        img: req.file ? req.file.filename : null,
        title: req.body.title,
        text: req.body.text
    };

    if (id) {
        if (!article.img) {
            delete article.img;
        }
        else {
            article.img = '/upload/' + article.img;
        }

        const query = { _id: id, author: userName };
        const setter = { $set: article };
        Article.findOneAndUpdate(query, setter).then(function (doc) {
            if (!doc) {
                return res.status(400).send({ err: errNoArticle });
            }

            res.send({ msg: 'done' });
            console.log('update', id, 'to', article);

        }).catch(function (err) {
            res.status(500).send({ err });
            console.error(err);
        });
    }
    else {
        if (!article.img) {
            return res.status(400).send({ err: errInvalidArticleImage });
        }
        article.img = '/upload/' + article.img;

        new Article(article).save().then(function (doc) {
            if (!doc) {
                return res.status(400).send({ err: errBadModelSave });
            }

            res.send({ msg: 'done' });
            console.log('create', article);

        }).catch(function (err) {
            res.status(500).send({ err });
            console.error(err);
        });
    }
});

router.post('/delete', function (req, res) {
    const userName = req.signedCookies['userNameSigned'];
    if (!userName) {
        return res.status(401).send({ err: errNoLogin });
    }

    const id = req.body.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({ err: errInvalidArticleId });
    }

    const query = { _id: id, author: userName };
    Article.findOneAndRemove(query).then(function (doc) {
        if (!doc) {
            return res.status(400).send({ err: errNoArticle });
        }

        res.send({ msg: 'done' });
        console.log('delete', id);

    }).catch(function (err) {
        res.status(500).send({ err });
        console.error(err);
    });
});

// dev helper

if (process.env.NODE_ENV == 'development') {
    router.post('/clear', function (req, res) {
        Article.remove().then(function (ret) {
            res.send(ret);
            console.log('clear articles');
        }).catch(function (err) {
            res.status(500).send({ err });
            console.error(err);
        });
    });
}

module.exports = router;
