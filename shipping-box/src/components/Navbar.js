
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/add" style={styles.link}>Add Box</Link>
      <Link to="/list" style={styles.link}>View Boxes</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    margin: '0 9rem', 
  },
};

export default Navbar;
