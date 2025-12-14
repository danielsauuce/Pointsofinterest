import "../components/login.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const loginFields = [
  { name: "username", type: "text", placeholder: "Username" },
  { name: "password", type: "password", placeholder: "Password" },
];

function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || "Username or Password do not match");
        return;
      }

      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Network error");
    }
  }

  return (
    <div className="login-page">
      <div className="wrapper">
        <div className="form-box">
          <form onSubmit={handleLogin}>
            <h1>Point Of Interest</h1>
            <h6>Please enter your details.</h6>

            {loginFields.map(({ name, type, placeholder }) => (
              <div className="form-input" key={name}>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

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
