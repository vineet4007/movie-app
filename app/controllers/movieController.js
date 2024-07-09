// app/controllers/movieController.js

const Movie = require('../models/Movie');
const movieService = require('../services/movieService');
const errorHandler = require('../utils/errorHandler');

async function getAllMovies(req, res) {
  try {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (err) {
    errorHandler(err, req, res);
  }
}

async function getMovieById(req, res) {
  const { id } = req.params;
  try {
    const movie = await movieService.getMovieById(id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    errorHandler(err, req, res);
  }
}

async function addMovie(req, res) {
  const movieData = req.body;
  try {
    const newMovie = await movieService.addMovie(movieData);
    res.status(201).json(newMovie);
  } catch (err) {
    errorHandler(err, req, res);
  }
}

async function updateMovie(req, res) {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedMovie = await movieService.updateMovie(id, updateData);
    res.json(updatedMovie);
  } catch (err) {
    errorHandler(err, req, res);
  }
}

async function deleteMovie(req, res) {
  const { id } = req.params;
  try {
    const deletedMovie = await movieService.deleteMovie(id);
    res.json(deletedMovie);
  } catch (err) {
    errorHandler(err, req, res);
  }
}

async function addToFavorites(req, res) {
  const { id } = req.params;
  try {
    const movie = await movieService.addToFavorites(id);
    res.json(movie);
  } catch (err) {
    errorHandler(err, req, res);
  }
}

async function removeFromFavorites(req, res) {
  const { id } = req.params;
  try {
    const movie = await movieService.removeFromFavorites(id);
    res.json(movie);
  } catch (err) {
    errorHandler(err, req, res);
  }
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
