import './SingleTodo.css';
import deleteIcon from "../../assets/icons/delete-icon.svg";
import { useState } from 'react';

const SingleTodo = ({ todo, deleteItem }) => {
  const [ checked, setChecked ] = useState(false);

  const handleClick = (todo) => {
    console.log('todo', todo.checked);
    checked === true ? setChecked(false) : setChecked(true);
    // toggleChecked(todo);
    // console.log('todo', checked);
  }

  const handleDelete = (id) => {
    deleteItem(id);
  }

  // const toggleChecked = (todo) => {
  //   const { id, checked } = todo;
  //   // console.log('checked val --->>> ', checked);
  //   // console.log('todo val --->>> ', todo);

  //   const updatedTodo = { 
  //     ...todo, 
  //     checked : checked === true ? false : true
  //   };
  //   // console.log('found -- newTodo', updatedTodo);

  //   // const todoIndex = todos.findIndex(element => element.id === id);

  //   // todos.splice(todoIndex, 1, updatedTodo)

  //   // console.log('Todos object', todos);
  // }

  return ( 
    <div key={todo.id} className={`single-todo ${checked ? 'task-completed' : ''}` }>
      <div className='todo-info'>
        <div 
          className={`custom_checkbox`}
          onClick={() => {handleClick(todo)}}>
            <div className={checked ? 'checked' : ''}></div>
        </div>
        <div>
          <h3  className={checked ? 'crossout' : ''}>{todo.task}</h3>
        </div>
      </div>
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
        <img 
          className="plus-icon" 
          src={deleteIcon} 
          alt="delete icon"
        />
      </button>
    </div>
   );
}
 
export default SingleTodo;