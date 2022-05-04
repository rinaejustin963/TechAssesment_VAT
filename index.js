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

    if(!todo) res.status(404).send('<h2 style = "font-family: Malgun Gothic; color: darkblue;"> Ohhhh Snap...Cant find what you are looking for</h2>');
    res.send(todo);
});

//Return completed todos
app.get('/api/todosDone', (req, res) =>{
  
    const todo = todosModel.findDoneTodo(todos);

    if(!todo) res.status(404).send('<h2 style = "font-family: Malgun Gothic; color: darkblue;"> Ohhhh Snap...Cant find what you are looking for</h2>');
    res.send(todo);
});

//Create a todo Request Handler
app.post('/api/todos', (req, res) =>{

    todos = todosModel.addTodo(req.body.name, req.body.done, todos);
    
    res.send(todos);
});

//Delete todo request Handler
app.delete('/api/todos/:id', (req, res) =>{

    
    
    //Search the todos list
    const todo = todosModel.deleteTodo(req.params.id, todos);
    if(!todo) res.status(404).send('The todo task with the ID provided is not available.');//Not available? Send 404 Error

    else{
        console.log('Todo task was Deleted successfully');//If deleted successfully
    }
 
    res.send(todo);
    

});

//Update todo request Handler
app.put('/api/todos/', (req, res) =>{

    
    //Search the todos list
    const todo = todosModel.updateTodo(req.body, todos);
    if(!todo) res.status(404).send('The todo task with the ID provided is not available.');//Not available? Send 404 Error

    else{
        console.log('Todo task was Updated successfully');
    }
    console.log(todos)
    res.send(todo);
    

});

//Update Done_todo request Handler
app.put('/api/markDonetodos', (req, res) =>{

    
    //Search the todos list
    const todo = todosModel.markDoneTodo(req.body, todos);
    if(!todo) res.status(404).send('The todo task with the ID provided is not available.');//Not available? Send 404 Error

    else{
        console.log('Todo task was Deleted successfully');
    }
    console.log(todos)
    res.send(todo);
    

});

//PORT env variables
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`My App is listening at http://localhost:${port}`))