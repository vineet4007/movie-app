// app/routes/commentRoutes.js

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:movieId/comments', commentController.addComment);
router.delete('/:movieId/comments/:commentId', commentController.deleteComment);

module.exports = router;
