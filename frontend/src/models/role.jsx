const mongoose = require('mongoose');

var roleSchema = new mongoose.Schema({
    code: {
        type: String,
        require: true,
        unique: true,
        index: true
    },
    value: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('Role', roleSchema);