import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../components/footer.css";


function Footer() {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Point Of Interest</h1>
                    <p>Choose your favourite destination.</p>
                </div>

                <div>
                    <Link to="#" className="Facebook"> <TiSocialFacebook /> </Link>
                </div>

                <div>
                    <Link to="#" className="Instagram"> <TiSocialInstagram /> </Link>
                </div>

                <div>
                    <Link to="#" className="Twitter"> <TiSocialTwitter /> </Link>
                </div>

                <div>
                    <Link to="#" className="Linkedin">  <TiSocialLinkedin /> </Link>
                </div>

            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>

                    <Link to="#">Changelog</Link>
                    <Link to="#">Status</Link>
                    <Link to="#">license</Link>
                    <Link to="#">All version</Link>
                </div>

                <div>
                    <h4>Community</h4>

                    <Link to="#">Discord</Link>
                    <Link to="#">Telegram</Link>
                    <Link to="#">Twitter</Link>
                    <Link to="https://www.facebook.com">Facebook</Link>
                </div>

                <div>
                    <h4>Help</h4>

                    <Link to="#">Support</Link>
                    <Link to="#">TroubleShooting</Link>
                    <Link to="#">Contact us</Link>
                    <Link to="#">All version</Link>
                </div>

                <div>
                    <h4>Others</h4>

                    <Link to="#">Privacy policy</Link>
                    <Link to="#">Term of service</Link>
                    
                </div>
            </div>
        </div>

    )
}
export default Footer;