import Destination from "../components/destination";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import AddPoi from "./addpoi";
import Trip from "../components/trips";
import Footer from "../components/footer";


function Home() {
    return(
        <div>
            <Hero/>
            <Destination/>
            <Trip/>
            <Footer/>
        </div>

    )
}
export default Home;


