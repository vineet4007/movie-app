// app/routes/movieRoutes.js

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.addMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);
router.post('/:id/favorite', movieController.addToFavorites);
router.delete('/:id/favorite', movieController.removeFromFavorites);

module.exports = router;
