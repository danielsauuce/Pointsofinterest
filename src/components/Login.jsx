import "../components/login.css";
import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handlelogin(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const status = await response.json();

      if (response.status != 200) {
        throw new Error(status.error);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  return (
    <div style={{width:"100vw",height:"100vh",display:"flex", justifyContent:"center",alignItems:"center"}}>
      <div className="wrapper">
        <div className="form-box">
          <form onSubmit={handlelogin}>
            <h1>Point Of Interest</h1>
            <h6>Please enter your details.</h6>

            <div className="form-input">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-input">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="remember-forget">
              <label>
                <input type="checkbox" />
                Remember for 30 days
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                Don't have an account? <a href="/signup">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
