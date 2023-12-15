const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    updatedAt: {
        type: Date,
        default: Date.now
    }
    // Additional fields can be added if needed
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
