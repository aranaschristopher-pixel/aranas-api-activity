const express = require('express');
const router = express.Router();

// Import auth routes
const authRoutes = require('./authRoutes');

// Mount them under /auth
router.use('/auth', authRoutes);

module.exports = router;