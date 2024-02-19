import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <img src="src/logo.jpeg" className="logo" alt="logo" />
        </div>
        <div className="nav">
          <ul className="U-list">
            <li className="nav-list">
              <Link to="/"className="nav-list">Home</Link>
            </li>
            <li className="nav-list">
              <Link to="/Register" className="nav-list">Register</Link>
            </li>
            <li className="nav-list">
              <Link to="/Login" className="nav-list">Login</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Nav;
