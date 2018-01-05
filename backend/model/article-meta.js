'use strict';
const mongoose = require('mongoose');
const options = require('../../common/article-common.json');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    category: {
        type: String,
        required: true,
        enum: options.categoryOptions
    },
    area: {
        type: String,
        required: true,
        enum: options.areaOptions
    },
    dateBeg: {
        type: Date,
        required: true
    },
    dateEnd: {
        type: Date,
        required: true
    },
    location: String,
    contact: String,
    cost: String
});

exports.schema = schema;
exports.model = mongoose.model('ArticleMeta', schema);
