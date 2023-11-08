import todos from "./TodoData"
import TodoItems from "./TodoItems"
function TodoList() {
    console.log(todos) 
    const todoitems= todos.map( (todo)=> {
        return (
            <TodoItems todo={todo}/>
        )
    });
    console.log(todoitems)

  return (
    <div>
      <ul>
        {todoitems}
      </ul>
    </div>
  )
}

export default TodoList
