'use strict';
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    // Note
    // - view current article from id
    res.send('respond with a resource');
});

router.get('/new-guide', function (req, res) {
    // Note
    // - yield a new article id
    res.send('respond with a resource');
});

router.get('/new-place', function (req, res) {
    // Note
    // - yield a new article id
    res.send('respond with a resource');
});

router.get('/edit', function (req, res) {
    // Note
    // - use previous article id
    // - submit or delete
    res.send('respond with a resource');
});

router.post('/submit', function (req, res) {
    // Note
    // - type
    //   - place
    //   - guide
    // - guide
    //   - author
    //   - timestamp
    //   - TEXT/PICS
    //   - (in article) link to place
    // - place
    //   - author
    //   - timestamp
    //   - location & area
    //   - cost
    //   - time
    //   - dial
    //   - TEXT/PICS
    //   - (below article) link to guide
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
