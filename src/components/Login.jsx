

function Login() {
  return (
    <div>
        <div className="login-container">
            <div className="login-form">
            <h1>Login</h1>
            <form>
                <div className="input-container">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                </div>
                <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login