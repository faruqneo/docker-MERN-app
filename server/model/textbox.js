const mongoose = require('mongoose');

const textBoxSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "attribute name must be there."],
    },
    id: {
        type: String,
        require: [true, "attribute id must be there."],
        unique: true
    },
    class: {
        type: String,
        require: [true, "attribute class must be there."],
    },
    size: {
        type: Number,
        require: false,
        default: 12
    },
},{timestamps: true});

module.exports = TextBox = mongoose.model('TextBox', textBoxSchema);