function Register() {
  return (
    <div>
        <div className="register-container">
            <div className="register-form">
            <h1>Register</h1>
            <form>
                <div className="input-container">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                </div>
                <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                </div>
                <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                </div>
                <div className="input-container">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" />
                </div>
                <button type="submit">Register</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Register