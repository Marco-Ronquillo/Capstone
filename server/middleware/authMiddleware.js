const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to check JWT and role
const verifyRole = (roles) => (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Forbidden" });

        if (!roles.includes(user.role)) {
            return res.status(403).json({ message: "Access Denied" });
        }

        req.user = user;
        next();
    });
};

module.exports = { verifyRole };