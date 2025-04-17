import { Link, Navigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import "../components/navbar.css";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
    useEffect(() => {
      async function checkLogin() {
        const response = await fetch("http://localhost:3000/users/login", {
          credentials: "include",
        });
        
        const results = await response.json();
        if (results.username) {
          setUsername(results.username);
        }
      }
  
      checkLogin();
    }, []);
  
    async function handleLogout() {

      try {
        const response = await fetch ("http://localhost:3000/users/logout", {
          method: "POST",
          credentials: "include",
        })
        
        if (response.status == 200) {
          setUsername("");
          toast.success("Logout successful")
          navigate("/");
        } else {
          toast.error("Unable to logout")
        }
      } catch (error) {
        console.error("Error", error.message)
        toast.error("Something is wrong!")
      }
    }
  

  return (
    <nav className="navbar-container">
      <Link to="/" className="logo">
        <h1 className="nav-logo"> Point of Interest</h1>
      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="home-tag">
            <IoHomeSharp className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/addpoi" className="about-tag">
            Add POIs
          </Link>
        </li>
        <li>
          <Link to="/poisearch" className="contact-tag">
            Search POIs
          </Link>
        </li>

        <li> {username ? (<button onClick={handleLogout}>Logout</button>) : (<Link to= "/login"><button>Login</button></Link>)}</li>

      </ul>
    </nav>
  );
}

export default Navbar;
