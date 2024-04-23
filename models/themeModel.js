// questionThemeModel.js

const mongoose = require('mongoose');

const questionThemeSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: String
});

module.exports = mongoose.model('Theme', questionThemeSchema);
