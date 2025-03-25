import "../components/addpoi.css";
import addPoi from "../assets/addpoi.avif";
import Footer from "../components/footer"


function AddPoi() {
    return(
        <div className="form-container">
            <div className="form-wrapper">
                <form>
                    <h1>ADD A NEW POINT OF INTEREST</h1>

                    <div className="form-input">
                        <input type="text" placeholder="Name"/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Type"/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Country"/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Region"/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="lon"/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="lat"/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Description"/>
                    </div>

                    <button typeof="submit">Submit</button>

                </form>
            </div>
            

            <div className="img-poi" style={{ backgroundColor: "red" }}>
                <img />
            </div>
            

        </div>
    );
}
export default AddPoi;