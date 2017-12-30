'use strict';
const express = require('express');
const router = express.Router();

const mongoClient = require('mongodb').MongoClient;
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

router.get('/', function (req, res) {
    const _id = req.query.id || 0;

    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        const query = { _id: require('mongodb').ObjectID(_id) };
        db.collection(collectionName).find(query).toArray(function (err, ret) {
            if (err) throw err;
            res.send(ret);
            console.log('query guide', _id);
            client.close();
        });
    });
});

router.get('/all-guides', function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        const query = { type: 'guide' };
        db.collection(collectionName).find(query).toArray(function (err, ret) {
            if (err) throw err;
            res.send(ret);
            console.log('query all-guides');
            client.close();
        });
    });
});

router.get('/all-places', function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        const query = { type: 'place' };
        db.collection(collectionName).find(query).toArray(function (err, ret) {
            if (err) throw err;
            res.send(ret);
            console.log('query all-places');
            client.close();
        });
    });
});

router.get('/new-guide', function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        const newArticle = {
            type: 'guide', title: 'TITLE', author: 'John', timestamp: new Date()
        };
        db.collection(collectionName).insertOne(newArticle, function (err, ret) {
            if (err) throw err;
            res.send(ret);
            console.log('insert', newArticle);
            client.close();
        });
    });
});

router.get('/new-place', function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);

        const newArticle = {
            type: 'place', title: 'TITLE', author: 'Jack', timestamp: new Date()
        };
        db.collection(collectionName).insertOne(newArticle, function (err, ret) {
            if (err) throw err;
            res.send(ret);
            console.log('insert', newArticle);
            client.close();
        });
    });
});

router.get('/edit', function (req, res) {
    // Note
    // - use previous article id
    // - submit or delete
    res.send('respond with a resource');
});

router.post('/submit', function (req, res) {
    res.send('respond with a resource');
});

router.post('/delete', function (req, res) {
    res.send('respond with a resource');
});

router.get('/upload-pics', function (req, res) {
    // Note
    // - write file to mongo
    // - https://stackoverflow.com/a/43592498
    res.send('respond with a resource');
});

module.exports = router;
