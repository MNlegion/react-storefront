const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // Schema Definition

});

module.exports = mongoose.model('User', UserSchema);