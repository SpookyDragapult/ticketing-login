const User = require('../models/user');

// Book Ticket Controller
const bookTicket = async (req, res) => {
  const { theater, schedule, seat, price } = req.body;
  const userId = req.user.userId; // Get user ID from JWT token

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const ticket = {
      theater,
      schedule,
      seat,
      price,
      bookedAt: new Date(),
    };

    user.ticketHistory = user.ticketHistory || [];
    user.ticketHistory.push(ticket);
    await user.save();

    res.status(200).json({ message: 'Ticket booked successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: 'Error booking ticket', error: error.message });
  }
};

// Get Profile (ticket history) Controller
const getProfile = async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ ticketHistory: user.ticketHistory });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

module.exports = {
  bookTicket,
  getProfile
};
