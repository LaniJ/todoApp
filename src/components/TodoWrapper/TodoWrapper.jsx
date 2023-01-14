import './TodoWrapper.css';
import CreateTodo from '../CreateTodo/CreateTodo';
import TodoList from '../TodoList/TodoList'
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';


const TodoWrapper = () => {

  const [ todos, setTodos ] = useState([
    {task : "Buy pots", id: 1, checked: false},
    {task : "Finish todo app", id: 2, checked: false},
    {task : "Praise God", id: 3, checked: false}
  ]);

  const [ pendingTasks, setPendingTasks ] = useState(todos.length);
  
 
  const addItem = (item) => {
    const newTodo = { task: item, id: (Math.floor(Math.random() * 1000)), checked: false};
    setTodos((prevTodos) => [ ...prevTodos, newTodo ]);
  }
  const deleteItem = (id) => {
    const currentTodos = todos.filter(task => task.id !== id);
    setTodos(currentTodos);
  }

  const deleteAllTodos = () => {
    setTodos([]);
    setPendingTasks(0);
  }
  const checkPendingTasks = () => {
    const pending = todos.filter(todo => todo.checked === false);
    setPendingTasks(pending.length);
  }
  const toggleChecked = (id) => {
    const todo = todos.find(todo => todo.id === id);
    const todoIndex = todos.findIndex(todo => todo.id === id);

    todos[todoIndex] = { ...todo, checked: todo.checked === true ? false : true }
    setTodos([ ...todos]);
  }
  useEffect(() => {
    checkPendingTasks();
  }, [todos, checkPendingTasks])

  return (
    <div className="todo-wrapper">
      <h2 className="todo-wrapper__header">Todo App</h2>
      <CreateTodo addItem={addItem}/>
      <TodoList todos={todos} deleteItem={deleteItem} toggleChecked={toggleChecked} />
      <Footer todos={todos} length={todos.length} pendingTasks={pendingTasks} deleteAll={deleteAllTodos}/>
    </div>
  );
}
 
export default TodoWrapper;