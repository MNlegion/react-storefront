const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  // Add more fields as needed for your categories
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
