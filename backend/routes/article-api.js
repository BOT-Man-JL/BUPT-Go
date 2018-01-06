'use strict';
const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;
const Article = require('../model/article').model;
const ArticleMeta = require('../model/article-meta').model;

const errBadModelSave = '无法保存该文章';
const errInvalidUserName = '无效的用户名';
const errInvalidArticleId = '无效的文章ID';
const errInvalidArticleImage = '无效的文章图片';
const errInvalidArticleMeta = '无效的类别/地区信息';
const errInvalidArticleContent = '无效的文章标题/正文';
const errNoArticle = '查询不到此文章';
const errNoLogin = '未登录！';

const msgCreate = '创建成功！';
const msgUpdate = '更新成功！';
const msgDelete = '删除成功！';

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

router.get('/recent', function (req, res) {
    Article.find()
        .sort({ timestamp: -1 })
        .select({ _id: 1, author: 1, timestamp: 1, meta: 1, title: 1, img: 1 })
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

    Article.find(query)
        .select({ _id: 1, author: 1, timestamp: 1, meta: 1, title: 1, img: 1 })
        .then(function (docs) {
            // Note: (docs.length == 0) is not an error
            res.send(docs);

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
        location: req.body.location || '',
        contact: req.body.contact || '',
        cost: req.body.cost || ''
    };

    if (!articleMeta.category || !articleMeta.area) {
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

    if (!article.title || !article.text) {
        return res.status(400).send({ err: errInvalidArticleContent });
    }

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

            res.send({ msg: msgUpdate });
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

            res.send({ msg: msgCreate });
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

        res.send({ msg: msgDelete });
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
