// app/services/movieService.js

const Movie = require('../models/Movie');
const errorHandler = require('../utils/errorHandler');

async function getAllMovies() {
  return await Movie.find();
}

async function getMovieById(id) {
  return await Movie.findById(id);
}

async function addMovie(movieData) {
  const movie = new Movie(movieData);
  return await movie.save();
}

async function updateMovie(id, updateData) {
  return await Movie.findByIdAndUpdate(id, updateData, { new: true });
}

async function deleteMovie(id) {
  return await Movie.findByIdAndDelete(id);
}

async function addToFavorites(id) {
  const movie = await Movie.findById(id);
  if (!movie) {
    throw new Error('Movie not found');
  }
  movie.favorite = true;
  return await movie.save();
}

async function removeFromFavorites(id) {
  const movie = await Movie.findById(id);
  if (!movie) {
    throw new Error('Movie not found');
  }
  movie.favorite = false;
  return await movie.save();
}

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
  addToFavorites,
  removeFromFavorites,
};
