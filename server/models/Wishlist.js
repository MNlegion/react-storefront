const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    // Schema Definition

});

module.exports = mongoose.model('Wishlist', WishlistSchema);