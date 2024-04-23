const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: String,
    surname: String,
    age: Number,
    gender: String,
    skinId: { type: mongoose.Schema.Types.ObjectId, ref: 'Skin' },
    systemPreferences: Object,
    isVIP: Boolean,
    statsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stats' },
    registrationDate: { type: Date, default: Date.now },
    lastLogin: Date,
    points: { type: Number, default: 0 },
    rank: Number,
    rankIcon: String
});

module.exports = mongoose.model('User', userSchema);