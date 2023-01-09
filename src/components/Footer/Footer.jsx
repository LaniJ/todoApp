import './Footer.css';

const Footer = ({ length, deleteAll }) => {
  return ( 
    <div>
      <p>You have {length} pending tasks left</p>
      <button onClick={deleteAll}>Clear All</button>
    </div>
   );
}
 
export default Footer;