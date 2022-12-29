const Todos = require('../models/Todos');

// get all Todos
exports.getTodos = async (req, res, next) => {
  try {
    // const todos = await Todos.find();
    res.status(200).json({ success: true, data: 'get all todos' });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
};

// get single todo
exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todos.findById(req.params.id);
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// create todo
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todos.create(req.body);
    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// delete a todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todos.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};
