import { useState } from "react";
import toast from "react-hot-toast";
import "../components/signup.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const status = await response.json();

      if (response.status != 200) {
        toast.error("Username or Password already exist");
      } else {
        toast.success("Registered Successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      console.log("Error", error.message);
    }
  }

  return (
    <div>
      <div className="wrapper-signup">
        <div className="form-box">
          <form onSubmit={handleSignup}>
            <h1>Point Of Interest</h1>
            <h6>Join us and start your journey</h6>

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

            <div className="terms-box">
              <label>
                <input type="checkbox" />I agree to the
                <a href="#">Terms and Conditions</a>
              </label>
            </div>

            <button type="submit">Create an account</button>

            <div className="login-link">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
