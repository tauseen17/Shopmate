import { Link, NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span>shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart:2</span>
      </Link>
    </header>
  );
};
