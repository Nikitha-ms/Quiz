import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import PropTypes from "prop-types";

function Register({ setRegistered }) {
  const { register } = useContext(AuthContext);
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username && data.email && data.password) {
      register(data.username, data.email, data.password);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-form">
          <h1>Register</h1>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
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
              Register
            </button>
          </form>
          <span
            className="span-log"
            onClick={() => {
              setRegistered(true);
            }}
          >
            go to login
          </span>
        </div>
      </div>
    </div>
  );
}
Register.propTypes = {
  setRegistered: PropTypes.func.isRequired,
};

export default Register;
