function Todo(todo,index,remove){
    function handle(){
        remove(index);
    }
    return
    <div className="todo" key={i} id={i} onClick={handle}> {todo.text} (-)</div>
}