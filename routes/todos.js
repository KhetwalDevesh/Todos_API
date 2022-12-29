const express = require('express');
const {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
} = require('../controllers/todos');
const router = express.Router();
router.route('/').get(getTodos).post(createTodo);
router.route('/:id').get(getTodo).delete(deleteTodo);
module.exports = router;
