const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();
dotenv.config({ path: './.env' });

// connect with database
connectDB();

const todos = require('./routes/todos');
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`server running on port ${PORT}`);
});
app.use('/api/v1/todos', todos);
// app.get('/api/v1/todos', (req, res) => {
//   res.status(200).send('hello');
//   console.log('success get');
// });
