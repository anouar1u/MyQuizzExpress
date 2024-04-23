const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    answers: [String],
    difficulty: Number,
    theme: { type: mongoose.Schema.Types.ObjectId, ref: 'Theme' },
    dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', questionSchema);
