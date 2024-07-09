// app/models/Movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  runningTime: { type: Number },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  favorite: { type: Boolean, default: false },
});

module.exports = mongoose.model('Movie', movieSchema);
