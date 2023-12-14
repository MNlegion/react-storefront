const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // Schema Definition

});

module.exports = mongoose.model('Product', ProductSchema);