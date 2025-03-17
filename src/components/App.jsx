import "../index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Login";
import SignUp from "./Signup";
import Navbar from "./navbar";
import PoiSearch from "../routes/poisearch";
import AddPoi from "../routes/addpoi";
import Home from "../routes/home";




function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/addpoi" element= {<AddPoi/>}></Route>
        <Route path="/searchpoi" element= {<PoiSearch/>}></Route>
        <Route path="/signup" element= {<SignUp/>}></Route>
        <Route path="/login" element= {<LoginPage/>}></Route>
      </Routes>
      
    </Router>

  );
}

export default App;
