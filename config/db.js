// config/db.js

const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/moviesApp';

module.exports = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
