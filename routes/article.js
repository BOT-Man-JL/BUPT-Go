'use strict';
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/mydb';
mongoose.connect(mongoUrl).catch(function (err) {
    console.error(err);
    throw err;
});

const ArticleSchema = require('../model/article-schema');
const PlaceSchema = require('../model/place-schema');

const Article = mongoose.model('article', ArticleSchema);
const Place = mongoose.model('place', PlaceSchema);

// Page

router.get('/create', function (req, res) {
    res.send('Create Page');
    console.log('create');
});

router.get('/edit', function (req, res) {
    const id = req.query.id || null;
    Article.findById(id).then(function (docs) {
        res.send('Edit Page for item ' + docs);
        console.log('edit', id);
    }).catch(function (err) {
        res.send({ err: err });
        throw err;
    });
});

// Get API

router.get('/', function (req, res) {
    const id = req.query.id || null;
    Article.findById(id).then(function (docs) {
        res.send(docs);
        console.log('query', id);
    }).catch(function (err) {
        res.send({ err: err });
        throw err;
    });
});

router.get('/hot', function (req, res) {
    const hotCount = 3;
    Article.find().limit(hotCount).then(function (docs) {
        res.send(docs);
        console.log('query all');
    }).catch(function (err) {
        res.send({ err: err });
        throw err;
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

    Article.find(query).then(function (docs) {
        res.send(docs);
        console.log('search');
    }).catch(function (err) {
        res.send({ err: err });
        throw err;
    });
});

// Post API

router.post('/submit', function (req, res) {
    const args = req.body;
    const type = args.type;
    if (type != 'guide' && type != 'place') {
        return res.send({ err: 'bad type' });
    }

    const article = {
        type: type,
        title: args.title || 'TITLE',
        author: args.author || 'anonymous',
        timestamp: new Date(),
        text: 'Empty Article',
        reference: []
    };

    if (type == 'place') {
        article.placeInfo = {
            categroy: args.category || 'fun',
            area: args.area || 'haidian',
            dateBeg: args.dateBeg || new Date(),
            dateEnd: args.dateEnd || new Date(),
            location: args.location || 'in BUPT Campus',
            contact: args.contact || '010-12345',
            cost: args.cost || 100
        };
    }

    const id = args.id || null;
    if (id) {
        const setter = { $set: article };
        Article.findByIdAndUpdate(id, setter).then(function (docs) {
            res.send(docs);
            console.log('update', id, 'to', article);
        }).catch(function (err) {
            res.send({ err: err });
            throw err;
        });
    }
    else {
        Article.create(article).then(function (docs) {
            res.send(docs);
            console.log('create', article);
        }).catch(function (err) {
            res.send({ err: err });
            throw err;
        });
    }
});

router.post('/delete', function (req, res) {
    const id = req.body.id || null;
    Article.findByIdAndRemove(id).then(function (docs) {
        res.send(docs);
        console.log('delete', id);
    }).catch(function (err) {
        res.send({ err: err });
        throw err;
    });
});

router.post('/clear', function (req, res) {
    Article.remove({}).then(function (docs) {
        res.send(docs);
        console.log('clear all');
    }).catch(function (err) {
        res.send({ err: err });
        throw err;
    })
});

router.post('/upload-pics', function (req, res) {
    // Note
    // - https://gist.github.com/aheckmann/2408370
    res.send('respond with a resource');
});

module.exports = router;
