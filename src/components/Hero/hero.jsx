import { Link } from "react-router-dom";
import backgroundVideo from "../../assets/video.mp4";
import "./hero.css";



const Hero = () => {

    return(
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>Decentralized</h1>
                <h2><span className="blue">Trading </span> Protocol</h2>
                <p>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
                <div className="btn-group">
                    <Link to='use' className="btn">Use Defi</Link>
                    <button className="btn btn-outline">Documentation</button>
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Total Volume Secured: $42,104,783,662.47</h2>
            </div>
        </div>
    )
}

export default Hero;