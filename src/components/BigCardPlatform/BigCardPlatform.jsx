import { Link } from "react-router-dom";
import "./BigCardPlatform.css"

const BigCardPlatform = () => {

    return (
        <div className="big-card">
            <div className="container">
                <div className="big-card-wrap">
                    <div className="card-content">
                        <span className="value">309</span>
                        <span className="text">Liquidity sources</span>
                    </div>
                    <div className="card-content">
                        <span className="value">$254B+</span>
                        <span className="text">Total volume</span>
                    </div>
                    <div className="card-content">
                        <span className="value">3.7M+</span>
                        <span className="text">Total wallets</span>
                    </div>
                    <div className="card-content">
                        <span className="value">24.8M+</span>
                        <span className="text">Total trades</span>
                    </div>
                </div>
                <div className="btn-wrap">
                    <Link to="/use" className="btn">Join us</Link>
                </div>
            </div>
        </div>
    )
}


export default BigCardPlatform;