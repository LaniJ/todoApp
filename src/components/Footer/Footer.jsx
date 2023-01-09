import './Footer.css';

const Footer = ({ length, deleteAll }) => {
  return ( 
    <div className='footer'>
      <p>You have <strong>{length}</strong> pending tasks left</p>
      <button className='delete-all-btn' onClick={deleteAll}>Clear All</button>
    </div>
   );
}
 
export default Footer;