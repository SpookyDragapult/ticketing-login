const Booking = require('../models/Booking');

exports.processBooking = async (req, res) => {
    const { movieTitle, seat, ticketPrice, paymentMethod, eWallet, creditCard, bank, userId } = req.body;

    try {
        // Create a new booking record
        const newBooking = new Booking({
            movieTitle,
            seat,
            ticketPrice,
            paymentMethod,
            eWallet,
            creditCard,
            bank,
            userId
        });

        // Save the booking to the database
        await newBooking.save();

        res.status(201).json({
            message: 'Booking successful',
            booking: newBooking
        });
    } catch (error) {
        console.error('Error processing booking:', error);
        res.status(500).json({ message: 'Error processing booking', error });
    }
};
