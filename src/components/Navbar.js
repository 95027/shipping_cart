import { NavLink } from 'react-router-dom';
import './style.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <NavLink to="/"><h2>Shopping cart</h2></NavLink>
        <NavLink to="/cart"><ShoppingCartIcon/></NavLink>
    </div>
  )
}

export default Navbar