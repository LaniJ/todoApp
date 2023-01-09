import './Footer.css';

const Footer = ({ length, deleteAll }) => {
  return ( 
    <div className='footer'>
      { length > 0 && <div className='pending-tasks'>
        <p>You have <strong>{length}</strong> pending task{length > 1 ? 's' : ''} left</p>
        <button className='delete-all-btn' onClick={deleteAll}>Clear All</button>
      </div>}
      { !length  && <div>
        <p>You have no tasks yet! Add a task.</p>
      </div>}
    </div>
   );
}
 
export default Footer;