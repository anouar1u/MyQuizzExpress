const mongoose = require('mongoose');

const skinSchema = new mongoose.Schema({
    name: String,
    iconUrl: String,
    description: String,
    unlockCriteria: String,
    features: Object
});

module.exports = mongoose.model('Skin', skinSchema);
