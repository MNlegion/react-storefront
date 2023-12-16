const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// MongoDB connection
const connectDB = require("./config/connection");

// Load environment variables from .env file
dotenv.config();

// Define the Express server
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define Routes
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Define the PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
