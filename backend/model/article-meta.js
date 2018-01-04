'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    category: {
        type: String,
        required: true,
        enum: ['美食', '电影', '展览', '其他']
    },
    area: {
        type: String,
        required: true,
        enum: ['东城区', '西城区', '朝阳区', '海淀区', '丰台区', '石景山区', '其他']
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
