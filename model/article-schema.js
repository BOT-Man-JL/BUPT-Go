'use strict';
const mongoose = require('mongoose');
const PlaceSchema = require('./place-schema');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ArticleSchema = new Schema({
    type: String,
    title: String,
    author: String,
    timestamp: Date,
    placeInfo: PlaceSchema,
    text: String
});

module.exports = ArticleSchema;
