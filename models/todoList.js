
function TodoList(id, name, done){
    this.id = id,
    this.name = name,
    this.done = done
}

exports.addTodo = (name, done, array = [])=>{
    const id = array.length + 1;
    var t = new TodoList(id, name, done);
     array.push(t);
     return array;
}

exports.findTodo = (id, array = [])=>{
    
     return array.find(c => c.id === parseInt(id));
}

exports.findDoneTodo = (array = [])=>{
    const doneTodo = [];
    array.forEach(element => {
       if(element.done){
        doneTodo.push(element);
       }
    });
    return doneTodo;
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
        array[index].done = todo.done;

        return  array.find(c => c.id === parseInt(todo.id));
    }

    else{
        return false;
    }
}

exports.markDoneTodo = (todo, array = [])=>{

    const found = array.find(c => c.id === parseInt(todo.id));
    
    if(found) {
        
        const index = array.indexOf(found);
        //Update object's name property.
        array[index].done = true;
        
        return  array.find(c => c.id === parseInt(todo.id));
    }

    else{
        return false;
    }
}