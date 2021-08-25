import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Rahul Joshi</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
