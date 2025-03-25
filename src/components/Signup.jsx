import "../components/signup.css";


function SignUp() {
  return (
    <div className="wrapper-signup">
      <div className="form-box">
        <form action="#">
          <h1>Point Of Interest</h1>
          <h6>Join us and start your journey</h6>

          <div className="form-input">
            <input type="text" placeholder="First Name" required />
          </div>

          <div className="form-input">
            <input type="text" placeholder="Last Name" required />
          </div>

          <div className="form-input">
            <input type="text" placeholder="Email" required />
          </div>

          <div className="form-input">
            <input type="text" placeholder="Username" required />
          </div>

          <div className="form-input">
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="terms-box">
            <label>
              <input type="checkbox" />I agree to the
              <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <button type="submit">Create an account</button>

          <div className="login-link">
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
