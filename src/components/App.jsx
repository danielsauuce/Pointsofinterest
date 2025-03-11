import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Login";
import SignUp from "./Signup";
import Navbar from "./navbar";
import PoiSearch from "./poisearch";

function App() {
  return (
    <>
    <PoiSearch/>
    </>
  );
}

export default App;
