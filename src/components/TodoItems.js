
//import  todo  from "./TodoList"

function TodoItems({todo}) {
  return (
    <div>
       <li>
            <span className="todo-list-item">{todo.title}</span>
            <button>Delete</button>
        </li>
    </div>
  )
}

export default TodoItems
