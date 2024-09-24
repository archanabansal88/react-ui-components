import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/table"}>Table</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/products"}>Products</Link>
      </div>
    </div>
  );
};

export default NavBar;
