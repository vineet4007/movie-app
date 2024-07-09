// app/controllers/commentController.js

const Comment = require('../models/Comment');
const commentService = require('../services/commentService');
const errorHandler = require('../utils/errorHandler');

async function addComment(req, res) {
  const { movieId } = req.params;
  const { text } = req.body;
  try {
    const newComment = await commentService.addComment(movieId, text);
    res.status(201).json(newComment);
  } catch (err) {
    errorHandler(err, req, res);
  }
}

async function deleteComment(req, res) {
  const { movieId, commentId } = req.params;
  try {
    const deletedComment = await commentService.deleteComment(movieId, commentId);
    res.json(deletedComment);
  } catch (err) {
    errorHandler(err, req, res);
  }
}

module.exports = {
  addComment,
  deleteComment,
};
