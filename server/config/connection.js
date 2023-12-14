const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/react-ecommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB: Welcome to the Party!");
    } catch (err) {
        console.error("Could not connect to MongoDB", err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;