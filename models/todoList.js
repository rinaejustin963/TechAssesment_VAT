
function TodoList(id, name, completed){
    this.id = id,
    this.name = name,
    this.completed = completed
}

exports.addTodo = (name, completed, array = [])=>{
    
    const id = array.length + 1;
    var t = new TodoList(id, name, completed);
     array.push(t);
     return array;

}

exports.findTodo = (id, array = [])=>{
    
     return array.find(c => c.id === parseInt(id));
}

exports.findCompletedTodo = (array = [])=>{
    const completedTodo = [];
    array.forEach(element => {
       if(element.completed){
        completedTodo.push(element);
       }
    });
    return completedTodo;
}

exports.deleteTodo = (id, array = [])=>{

    const found = array.find(c => c.id === parseInt(id));
   
    if(found) {
        
        const index = array.indexOf(found);
        array.splice(index, 1);
        return found;
    }

    else{
        return false;
    }
}

exports.updateTodo = (todo, array = [])=>{

    const found = array.find(c => c.id === parseInt(todo.id));
    
    if(found) {
        
        const index = array.indexOf(found);
        //Update object's name property.
        array[index].name = todo.name;
        array[index].completed = todo.completed;

        return  array.find(c => c.id === parseInt(todo.id));
    }

    else{
        return false;
    }
}

exports.markCompletedTodo = (todo, array = [])=>{

    const found = array.find(c => c.id === parseInt(todo.id));
    
    if(found) {
        
        const index = array.indexOf(found);
        //Update object's name property.
        array[index].completed = true;
        
        return  array.find(c => c.id === parseInt(todo.id));
    }

    else{
        return false;
    }
}