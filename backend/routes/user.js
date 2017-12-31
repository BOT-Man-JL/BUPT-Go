'use strict';
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    // Note
    // - render timeline of this user
    res.send('respond with a resource');
});

router.get('/login', function (req, res) {
    res.send('respond with a resource');
});

router.get('/signup', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;
