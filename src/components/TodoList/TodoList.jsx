import './TodoList.css'
const TodoList = () => {
  return (  
    <div className="todo-item">
      <input type="checkbox" />
      <label>
          <span class="custom-checkbox"></span>
          Buy lunch
      </label>
      {/* <p>Buy lunch</p> */}
    </div>
  );
}
 
export default TodoList;