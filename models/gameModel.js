const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    playerA: mongoose.Schema.Types.ObjectId,
    playerB: mongoose.Schema.Types.ObjectId,
    winner: mongoose.Schema.Types.ObjectId,
    rounds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Round' },]
});

module.exports = mongoose.model('Game', gameSchema);