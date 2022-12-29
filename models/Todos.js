const mongoose = require('mongoose');
const TodosSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a todo'],
    unique: true,
    maxlength: [50, 'Todo can not be more than 50 characters'],
  },
  status: {
    type: Boolean,
    required: [true, 'Completed or not'],
  },
});
module.exports = mongoose.model('Todos', TodosSchema);
