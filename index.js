const express = require('express');
const { string, boolean } = require('joi');
const todosModel = require(__dirname+'/models/todoList.js')
const app = express();
app.use(express.json());

var todos = [];
todos = todosModel.addTodo("Add backend functionality to the website", false, todos);
todos = todosModel.addTodo("Pay rent", false, todos);
todos = todosModel.addTodo("Take my Dog for a walk", false, todos);
todos = todosModel.addTodo("Make lasgna", false, todos);

//Read todo request Handlers
app.get('/', (req, res) => {
    res.send('<h2 style = "font-family: Malgun Gothic; color: darkblue;">Welcome to My TodoList App</h2>');
});

app.get('/api/todos', (req, res) => {
    res.send(todos);
});


app.get('/api/todos/:id', (req, res) =>{
    const todo = todos.find(c=> c.id == parseInt(req.params.id));

    if(!todo) res.status(404).send('<h2 style = "font-family: Malgun Gothic; color: darkblue;"> Ohhhh Snap...Cant find what you are lookinf for</h2>');
    res.send(todo);
});

//Create todo Request Handler
app.post('/api/todos', (req, res) =>{

    todos = todosModel.addTodo(req.body.name, false, todos);
    
    res.send(todos);
});




//PORT env variables
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`My App is listening at http://localhost:${port}`))