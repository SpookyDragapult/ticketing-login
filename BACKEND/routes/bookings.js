const express = require('express');
const { bookTicket, getProfile } = require('../controllers/bookingController');
const protect = require('../middleware/authMiddleware'); // JWT middleware
const router = express.Router();

// Protected route to book a ticket
router.post('/book-ticket', protect, bookTicket);

// Protected route to get user's profile (ticket history)
router.get('/profile', protect, getProfile);

module.exports = router;
