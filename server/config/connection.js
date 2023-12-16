const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Define the MongoDB connection URI
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/react-storefront';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB - Welcome to the Party!');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

module.exports = connectDB;
