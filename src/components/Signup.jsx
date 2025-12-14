import { useState } from "react";
import toast from "react-hot-toast";
import "../components/signup.css";
import { useNavigate } from "react-router-dom";

const signupFields = [
  { name: "username", type: "text", placeholder: "Username" },
  { name: "password", type: "password", placeholder: "Password" },
];

function SignUp() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSignup(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || "Username or Password already exist");
      } else {
        toast.success("Registered Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Something went wrong, please try again");
    }
  }

  return (
    <div className="wrapper-signup">
      <div className="form-box">
        <form onSubmit={handleSignup}>
          <h1>Point Of Interest</h1>
          <h6>Join us and start your journey</h6>

          {signupFields.map(({ name, type, placeholder }) => (
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

          <div className="terms-box">
            <label>
              <input type="checkbox" />I agree to the{" "}
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
  );
}

export default SignUp;
