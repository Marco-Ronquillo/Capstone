const jwt = require('jsonwebtoken');

// Function to generate a JWT
function generateToken(payload) {
    const secretKey = process.env.JWT_SECRET;
    const options = {
        expiresIn: process.env.JWT_EXPIRATION
    };
    return jwt.sign(payload, secretKey, options);
}

// Function to verify a JWT
function verifyToken(token) {
    const secretKey = process.env.JWT_SECRET;
    return jwt.verify(token, secretKey);
}

module.exports = {
    generateToken,
    verifyToken
};