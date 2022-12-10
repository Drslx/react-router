// 2 Links com react router
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    /* Links do componentes */
    <nav>
      {/*  <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}

      <NavLink
        to="/"
        /* className={({ isActive }) => (isActive ? "active" : "disable")} */
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
