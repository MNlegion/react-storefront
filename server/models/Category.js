const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: true,
        trim: true
    },
    description: {
        type: String
    },
    // Add more fields as necessary, like an image for the category
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
