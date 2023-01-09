import { useState } from "react";
import plusIcon from "../../assets/icons/plus-icon.svg";
import './CreateTodo.css';

const CreateTodo = ({ addItem }) => {
  const [ todoItem, setTodoItem ] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (!todoItem.length) return;
    const newItem = todoItem.trim();
    addItem(newItem);
    setTimeout(() => {
      setTodoItem('');
    }, 600);
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