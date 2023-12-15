const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    deliveryDetails: {
        type: Object, // Can be more specific depending on delivery details structure
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    // Additional fields like order status, tracking number, etc., can be added here
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
