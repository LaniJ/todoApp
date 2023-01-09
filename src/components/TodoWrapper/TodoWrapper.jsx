import './TodoWrapper.css';
import CreateTodo from '../CreateTodo/CreateTodo';
import TodoList from '../TodoList/TodoList'
import { useState } from 'react';
import Footer from '../Footer/Footer';


const TodoWrapper = () => {
  const [ todos, setTodos ] = useState([
    {task : "Buy pots", id: 1, checked: false},
    {task : "Finish todo app", id: 2, checked: false},
    {task : "Praise God", id: 3, checked: false}
  ])
  
 
  const addItem = (item) => {
    const newTodo = { task: item, id: (Math.floor(Math.random() * 1000)), checked: false}
    // console.log('newTodo', newTodo);
    const modTodos = [ ...todos, newTodo ]
    // console.log('modTodos', modTodos);
    setTodos(modTodos)
  }
  const deleteItem = (id) => {
    const currentTodos = todos.filter(task => task.id !== id);
    // console.log('deletedTodoIndex', deletedTodoIndex);
    // todos.splice(deletedTodoIndex, 1);
    console.log('in parent-- todos', currentTodos);
    setTodos(currentTodos);
  }

  const deleteAllTodos = () => {
    setTodos([])
  }

  return (
    <div className="todo-wrapper">
      <h2 className="todo-wrapper__header">Todo App</h2>
      <CreateTodo addItem={addItem}/>
      <TodoList todos={todos} deleteItem={deleteItem} />
      <Footer length={todos.length} deleteAll={deleteAllTodos}/>
    </div>
  );
}
 
export default TodoWrapper;