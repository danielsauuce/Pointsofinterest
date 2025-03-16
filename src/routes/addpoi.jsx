import Navbar from "../components/navbar";
import addPoi from "../assets/addpoi.avif";


function AddPoi() {
    return(
        
        <div className="Addpoi-wrapper">
            <Navbar/>
            <div>
                <div className="img-wrapper"> <img src={addPoi} alt="Background"/> </div>

                <div className="addpoi-text">
                    <h1>Add a New Point Of Interest</h1>
                </div>
            </div>
        </div>
    )
}
export default AddPoi;