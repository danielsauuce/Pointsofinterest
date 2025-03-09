function LoginPage () {
  
  return(
    <div className="wrapper">
      <div className="form-box">
        <form action="#">
          <h1>Point Of Interest</h1>
          <h6>Please enter your details.</h6>

          <div className="form-input">
            <input type="text" placeholder="Username" required/>
          </div>

          <div className="form-input">
            <input type="password" placeholder="Password" required/>
          </div>

          <div className="remember-forget">
            <label><input type="checkbox"/>Remember for 30 days</label>
            <a href="#">Forget password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>

  );
}

export default LoginPage;