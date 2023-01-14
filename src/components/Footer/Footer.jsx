import './Footer.css';

const Footer = ({ todos, length, pendingTasks, deleteAll }) => {
  return ( 
    <div className='footer'>
      {!length  && <div>
        <p>You have no tasks yet! Add a task.</p>
      </div>}

      {todos.length && <div className='pending-tasks'>
        {!pendingTasks && <p>You have no pending tasks.</p>}
        {pendingTasks && <p>You have <strong>{pendingTasks}</strong> pending task{pendingTasks === 1 ? '' : 's'} left</p>}      
        <button className='delete-all-btn' onClick={deleteAll}>Clear All</button>
      </div>}
    </div>
   );
}
 
export default Footer;