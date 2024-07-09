// app/services/commentService.js

const Comment = require('../models/Comment');
const errorHandler = require('../utils/errorHandler');

async function addComment(movieId, text) {
  const newComment = new Comment({
    movieId,
    text,
  });
  return await newComment.save();
}

async function deleteComment(movieId, commentId) {
  const deletedComment = await Comment.findOneAndDelete({ _id: commentId, movieId });
  if (!deletedComment) {
    throw new Error('Comment not found');
  }
  return deletedComment;
}

module.exports = {
  addComment,
  deleteComment,
};
