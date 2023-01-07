import { useState } from "react";
import plusIcon from "../../assets/icons/plus-icon.svg";
import './CreateTodo.css';

const CreateTodo = () => {
  const [ todoItem, setTodoItem ] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    console.log('todoItem', todoItem);
    setTimeout(() => {
      setTodoItem('');
    }, 1000);
  }
  return ( 
    <div>
      <form action="" className="create-todo-group">
          <input 
            className="todo-input" 
            type="text" 
            placeholder="Add your new todo"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <button className="add-btn" onClick={handleClick}>
            <img 
              className="plus-icon" 
              src={plusIcon} 
              alt="plus icon"
            />
          </button>
      </form>
    </div>
   );
}
 
export default CreateTodo;