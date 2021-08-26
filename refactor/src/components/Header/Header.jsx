import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img
          src="https://www.rahulpjoshi.com/img/LOGO.svg"
          alt="Rahul Joshi logo"
        />
      </div>
      <nav>
        <NavLink exact activeClassName="orange" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="orange" to="/about">
          About
        </NavLink>
        <NavLink exact activeClassName="orange" to="/work">
          Work
        </NavLink>
        <NavLink exact activeClassName="orange" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
