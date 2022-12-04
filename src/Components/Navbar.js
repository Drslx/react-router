// 2 Links com react router
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    /* Links do componentes */
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
     
    </nav>
  );
};

export default Navbar;
 