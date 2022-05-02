const express = require('express');
const { string, boolean } = require('joi');
const todosModel = require(__dirname+'/models/todoList.js')
const app = express();
app.use(express.json());

var todos = [];
todos = todosModel.addTodo("1", "Add backend functionality to the website", false, todos);
todos = todosModel.addTodo("2", "Pay rent", false, todos);
todos = todosModel.addTodo("3", "Take my Dog for a walk", false, todos);
todos = todosModel.addTodo("4", "Make lasgna", false, todos);

app.get('/api/todos', (req, res) => {
    res.send(todos);
});


//PORT env variables
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`My App is listening at http://localhost:${port}`))