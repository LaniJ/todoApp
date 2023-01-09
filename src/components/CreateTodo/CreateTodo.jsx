import { useState } from "react";
import plusIcon from "../../assets/icons/plus-icon.svg";
import './CreateTodo.css';

const CreateTodo = ({ addItem }) => {
  const [ todoItem, setTodoItem ] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const newItem = todoItem.trim();
    console.log('todoItem', newItem);
    addItem(newItem);
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