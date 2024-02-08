const mongoose = require('mongoose');
const User = require('./User');
const { Schema } = mongoose;

const notesSchema = new Schema({
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model("note", notesSchema);