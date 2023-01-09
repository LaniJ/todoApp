import './TodoList.css'

import SingleTodo from '../SingleTodo/SingleTodo'

const TodoList = ({ todos, deleteItem }) => {
 
  return (  
    <div className="todo-items">
       {todos.map(todo => (
        <SingleTodo key={todo.id} todo={todo} deleteItem={deleteItem}/>
       ))}
    </div>
  );
}
 
export default TodoList;