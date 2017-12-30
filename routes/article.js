'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();

const mongoClient = require('mongodb').MongoClient;
const getObjectId = require('mongodb').ObjectID;
const mongoUrl = 'mongodb://localhost:27017/';
const dbName = 'mydb';
const collectionName = 'article';

mongoClient.connect(mongoUrl, function (err, client) {
    if (err) throw err;
    const db = client.db(dbName);

    db.createCollection(collectionName, function (err, ret) {
        if (err) throw err;
        console.log('Collection created!');
        client.close();
    });
});

// Article Definition:
// - common
//   - _id
//   - type
//   - title
//   - author
//   - timestamp
// - guide
//   - TEXT/PICS
//   - (in article) link to place
// - place
//   - category & area & date-range => search
//   - location / dial / cost => display only
//   - TEXT/PICS
//   - (below article) link to guide
// - pic

router.get('/create', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/test-post.html'));
});

router.get('/edit', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/test-post.html'));
});

router.get('/', function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        const id = req.query.id || 0;
        const query = { _id: getObjectId(id) };
        db.collection(collectionName).find(query).toArray(function (err, ret) {
            if (err) throw err;
            res.send(ret);
            console.log('query', id);
            client.close();
        });
    });
});

router.get('/all', function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        db.collection(collectionName).find().toArray(function (err, ret) {
            if (err) throw err;
            res.send(ret);
            console.log('query all');
            client.close();
        });
    });
});

router.post('/submit', function (req, res) {
    const type = req.body.type;
    if (type != 'guide' && type != 'place') {
        res.send({
            ok: 0,
            err: 'bad type'
        });
        return;
    }

    const newArticle = {
        type: type,
        title: req.body.title || 'NEW TITLE',
        author: req.body.author || 'Anonymous',
        timestamp: new Date()
    };

    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        const id = req.body.id || null;
        if (id) {
            const query = { _id: getObjectId(id) };
            const article = { $set: newArticle };
            db.collection(collectionName).updateOne(query, article, function (err, ret) {
                if (err) throw err;
                res.send(ret);
                console.log('update', id, 'to', newArticle);
                client.close();
            });
        }
        else {
            db.collection(collectionName).insertOne(newArticle, function (err, ret) {
                if (err) throw err;
                res.send(ret);
                console.log('create', newArticle);
                client.close();
            });
        }
    });
});

router.post('/delete', function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        const id = req.body.id || 0;
        const query = { _id: getObjectId(id) };
        db.collection(collectionName).deleteOne(query, function (err, ret) {
            if (err) throw err;
            res.send(ret);
            console.log('delete', id);
            client.close();
        });
    });
});

router.post('/upload-pics', function (req, res) {
    // Note
    // - write file to mongo
    // - https://stackoverflow.com/a/43592498
    res.send('respond with a resource');
});

module.exports = router;
