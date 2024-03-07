import { useState } from "react";

function Login() {

  const [data, setdata] = useState({
    username: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

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
            <button type="submit" onClick={handleSubmit}>Login</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
