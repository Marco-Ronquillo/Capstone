// server/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/verify-phone", authController.verifyPhone);

module.exports = router;