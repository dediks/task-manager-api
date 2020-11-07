const express = require('express');
const app = express();

const User = require('./models/user');
const Task = require('./models/task');
require('./db/mongoose');

const UserRouter = require('./routers/user');
const TaskRouter = require('./routers/task');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
