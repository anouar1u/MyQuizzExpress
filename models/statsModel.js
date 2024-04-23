const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    gamesPerDay: Number,
    gamesPerWeek: Number,
    gamesPerMonth: Number,
    ratioWL: Number,
    overallRank: Number,
    favoriteTheme: String,
    longestWinStreak: Number,
    longestNoMistakeStreak: Number,
    rankIcon: String
});

module.exports = mongoose.model('Stats', statsSchema);
