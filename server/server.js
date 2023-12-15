const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { userRoutes } = require("./routes");

// MongoDB connection
const connectDB = require("./config/connection");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body in requests

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
