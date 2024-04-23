const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
    gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    answers: [
        {
            userId: mongoose.Schema.Types.ObjectId,
            answer: String
        }
    ]
});

module.exports = mongoose.model('Round', roundSchema);
