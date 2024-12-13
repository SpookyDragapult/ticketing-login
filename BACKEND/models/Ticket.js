const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    movie: { type: String, required: true },
    theatre: { type: String, required: true },
    schedule: { type: String, required: true },
    seatNumbers: { type: [String], required: true },
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }  // Link to User
});

module.exports = mongoose.model('Ticket', ticketSchema);
