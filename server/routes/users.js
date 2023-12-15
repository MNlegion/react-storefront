const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/api/users/usersController');

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

// Additional routes for user profile, etc.

module.exports = router;

