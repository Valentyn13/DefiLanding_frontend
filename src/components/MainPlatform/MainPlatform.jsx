import "./MainPlatform.css"
import PlatformVideo from "./../../assets/2781013183.mp4";
import { Link } from "react-router-dom";
const MainPlatform = () => {


    return(
        <div className="main-platform">
            <video autoPlay loop muted id="video">
                <source src={PlatformVideo} type='video/mp4'/>
            </video>
 
            <div className="container">

            <div className="left-content">
                <div className="about-platform">
                    <div>Powerful for</div>
                    <div>developers.</div>
                    <div>Fast for</div>
                    <div>everyone.</div>
                </div>
                <div className="btn-controller">
                    <Link to='/use' className="btn"> Use Defi</Link>
                    <Link to='/' className="btn btn-outline">Home</Link>
                </div>
                <div className="offer">
                    We offer a decentralized
                 blockchain scalable protocol and user-friendly apps for the world.
                </div>

            </div>






            </div>


        </div>
    )
}


export default MainPlatform;