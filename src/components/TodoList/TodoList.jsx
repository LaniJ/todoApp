import './TodoList.css'

import SingleTodo from '../SingleTodo/SingleTodo'

const TodoList = ({ todos, deleteItem, toggleChecked }) => {
 
  return (  
    <div className="todo-items">
       {todos.map(todo => (
        <SingleTodo key={todo.id} todo={todo} deleteItem={deleteItem} toggleChecked={toggleChecked} />
       ))}
    </div>
  );
}
 
export default TodoList;