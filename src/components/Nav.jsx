function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <img src="src/logo.jpeg" className="logo" alt="logo" />
        </div>
        <div className="nav">
          <ul className="U-list">
            <li className="nav-list">Home</li>
            <li className="nav-list">Register</li>
            <li className="nav-list">Sign-in</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
