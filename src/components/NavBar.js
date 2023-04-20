import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <img className="logo" src={logo} alt="logo" />
      <Link className="nav-text" to="/">
        Home
      </Link>
      <Link className="nav-text" to="/liked">
        Liked Page
      </Link>
      <Link className="nav-text" to="/block">
        Block Page
      </Link>
    </nav>
  );
};
