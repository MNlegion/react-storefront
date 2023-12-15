const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Refers to the Category model
        required: [true, 'Product category is required']
    },
    stockQuantity: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock quantity cannot be negative']
    },
    images: [{
        type: String, // URLs to the images
        required: [true, 'Product images are required']
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
    // Add more fields as necessary
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
