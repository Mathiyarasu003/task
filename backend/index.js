console.log('Starting backend...');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
// const passport = require('passport');
// const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Session setup for Passport
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: false,
}));
// app.use(passport.initialize());
// app.use(passport.session());

// Import User model
// const User = require('./models/User');

// Passport config
// require('./passportConfig')(passport);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('Backend is running and connected to MongoDB!');
});

// Auth routes
// app.use('/auth', require('./routes/auth'));

// Example API route
app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'First Task', completed: false },
    { id: 2, title: 'Second Task', completed: true }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 