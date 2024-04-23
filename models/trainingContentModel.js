const mongoose = require('mongoose');

const trainingContentSchema = new mongoose.Schema({
    title: String,
    theme: String,
    content: String
});

module.exports = mongoose.model('TrainingContent', trainingContentSchema);
