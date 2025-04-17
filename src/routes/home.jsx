import { useEffect, useState } from "react";
import Destination from "../components/destination";
import Hero from "../components/hero";
import Trip from "../components/trips";

function Home() {
  const [username, setUsername] = useState("");

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

  

  return (
    <div>
      {username && <div className="logged-user">Welcome {username}</div>}
      <Hero />
      <Destination />
      <Trip />
    </div>
  );
}

export default Home;