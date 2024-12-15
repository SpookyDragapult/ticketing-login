const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// POST route for bookings
router.post('/bookings', paymentController.processBooking);

module.exports = router;
