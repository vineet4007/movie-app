// server.js

const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./app/routes/movieRoutes');
const commentRoutes = require('./app/routes/commentRoutes');
const errorHandler = require('./app/utils/errorHandler');
const dbConnect = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);
app.use('/api/comments', commentRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
