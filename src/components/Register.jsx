import { useState } from "react";

function Register() {
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
    console.log(data);
  }

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
        </div>
      </div>
    </div>
  );
}

export default Register;
