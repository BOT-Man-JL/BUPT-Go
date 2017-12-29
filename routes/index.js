'use strict';
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    // Note
    // - render guide items
    res.render('index', { title: 'Express' });
});

module.exports = router;
