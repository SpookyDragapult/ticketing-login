const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/paymentRoutes');
const cors = require('cors'); // For handling CORS issues in development

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json()); // If you expect JSON payloads

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', paymentRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movie_booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
