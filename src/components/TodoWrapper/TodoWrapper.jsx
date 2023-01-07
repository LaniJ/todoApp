import './TodoWrapper.css';
import CreateTodo from '../CreateTodo/CreateTodo';
import TodoList from '../TodoList/TodoList'

const TodoWrapper = () => {
  return (
    <div className="todo-wrapper">
      <h2 className="todo-wrapper__header">Todo App</h2>
      <CreateTodo />
      <TodoList />
      <div>
        <p>You have 4 pending tasks left</p>
        <button>Clear All</button>
      </div>
    </div>
  );
}
 
export default TodoWrapper;