'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PlaceSchema = new Schema({
    category: String,
    area: String,
    dateBeg: Date,
    dateEnd: Date,
    location: String,
    dial: String,
    cost: Number
});

module.exports = PlaceSchema;
