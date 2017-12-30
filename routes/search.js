'use strict';
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    // Note
    // - list top 10 place items
    res.send('respond with a resource');
});

router.get('/results', function (req, res) {
    // Note
    // - request
    //   - category
    //   - date
    //   - area
    // - response
    //   - render place items
    res.send('respond with a resource');
});

module.exports = router;
