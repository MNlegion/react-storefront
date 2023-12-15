const User = require('../../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usersController = {
    // User registration
    async register(req, res) {
        try {
            const { username, email, password } = req.body;

            // Validate user data (consider using a library like express-validator)
            // ...

            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const user = new User({
                username,
                email,
                password: hashedPassword
            });

            // Save user to database
            await user.save();
            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // User login
    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Validate user data
            // ...

            // Check if user exists
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            // Compare password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            // Create JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });

            res.json({ token, message: "Login successful" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Additional controller methods like getUserProfile, updateUserProfile, etc., can be added here
};

module.exports = usersController;
