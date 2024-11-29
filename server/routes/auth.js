const express = require('express');
const { generateToken, verifyToken } = require('../controllers/authController');

const router = express.Router();

// Example route to login and generate a token
router.post('/login', (req, res) => {
    const user = { id: 1, username: 'JohnDoe' }; // Replace with actual user lookup
    const token = generateToken(user);
    res.json({ token });
});

// Example middleware to protect a route
router.get('/protected', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token
    if (!token) return res.sendStatus(403); // Forbidden

    try {
        const decoded = verifyToken(token);
        res.json({ message: 'Protected data', user: decoded });
    } catch (err) {
        res.sendStatus(401); // Unauthorized
    }
});

module.exports = router;