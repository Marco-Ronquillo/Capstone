const express = require('express');
const { verifyRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', verifyRole(['admin']), (req, res) => {
    res.json({ message: "Welcome Admin" });
});

module.exports = router;