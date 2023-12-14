const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    // Schema Definition

});

module.exports = mongoose.model('Order', OrderSchema);