const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { client } = require('../connection');

const todoSchema = new Schema({
    content: String,
    status: {
        type: Number,
        default: 0
    }
});

const todoModel = client.model("Todo", todoSchema);

module.exports = { todoModel };