
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

