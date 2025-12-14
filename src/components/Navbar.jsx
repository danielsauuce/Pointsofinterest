import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import '../components/navbar.css';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', icon: <IoHomeSharp className="icon" /> },
  { name: 'Add POIs', path: '/addpoi' },
  { name: 'Search POIs', path: '/poisearch' },
];

function Navbar() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function checkLogin() {
      try {
        const response = await fetch('http://localhost:3005/users/login', {
          credentials: 'include',
        });
        const result = await response.json();
        if (result.username) setUsername(result.username);
      } catch (err) {
        console.error('Login check failed:', err);
      }
    }
    checkLogin();
  }, []);

  async function handleLogout() {
    try {
      const response = await fetch('http://localhost:3005/users/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setUsername('');
        toast.success('Logout successful');
        navigate('/login');
      } else {
        toast.error('Unable to logout');
      }
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Something went wrong!');
    }
  }

  return (
    <nav className="navbar-container">
      <Link to="/" className="logo">
        <h1 className="nav-logo">Point of Interest</h1>
      </Link>

      <ul className="nav-menu">
        {navItems.map(({ name, path, icon }) => (
          <li key={name}>
            <Link
              to={path}
              className={`${name.toLowerCase().replace(' ', '-')}-tag`}
            >
              {icon && icon} {name}
            </Link>
          </li>
        ))}

        <li>
          {username ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
