const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: './.env' });
const todos = require('./routes/todos');
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`server running on port ${PORT}`);
});
app.use('/api/v1/todos', todos);
