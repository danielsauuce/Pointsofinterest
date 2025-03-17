import Destination from "../components/destination";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import AddPoi from "./addpoi";
import Trip from "../components/trips";


function Home() {
    return(
        <div>
            <Hero/>
            <Destination/>
            <Trip/>
        </div>

    )
}
export default Home;


