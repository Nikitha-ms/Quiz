import { useContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login({ setRegistered }) {
  const { login } = useContext(AuthContext);

  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username && data.password) {
      login(data.username, data.password);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </form>
          <span
            className="span-log"
            onClick={() => {
              setRegistered(false);
            }}
          >
            go to Register
          </span>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  setRegistered: PropTypes.func.isRequired,
};

export default Login;
