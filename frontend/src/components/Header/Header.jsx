import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="eCapital Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Employees</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
