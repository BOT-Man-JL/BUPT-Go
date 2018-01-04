'use strict';
const mongoose = require('mongoose');
const ArticleMeta = require('./article-meta');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    author: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    meta: {
        type: ArticleMeta.schema,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

exports.schema = schema;
exports.model = mongoose.model('Article', schema);
