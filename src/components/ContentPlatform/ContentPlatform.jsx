import "./ContentPlatform.css";
import image from "./../../assets/wallet-buy.webp"
import trackImage from './../../assets/dao.webp'
import ecosystem from "./../../assets/news-image.webp"
const ContentPlatform = () => {

    return(
        <div className="content-platform">
            <div className="container">
                <h3>Our opportunities</h3>
                <div className="first">
                      <div className="content">
                        <div className="content-text">
                        <h4>Native Wallet</h4>
                            <div>Your DeFi entry point<br/>
                            All DEXes in a single App
                            </div>
                        </div>
                      </div>
                      <div className="img-control">
                    <img src={image} alt="oops..."/>
                      </div>
                </div>
                <div className="second">
                    <div className="img-control">
                    <img src={trackImage} alt="oops..."/>
                    </div>
                    <div className="content">
                        <div className="content-text">
                            <h4>Crypto Oracle</h4>
                            <div>
                                Analyzing and tracking <br/>
                                Wed3 app
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third">
                    <div className="content">
                        <div className="content-text">
                        <h4>Never ending <br/>Liquidity</h4>
                        <div>
                        Defi app instantly analyzes thousands of quotes and fees across
                        <br/>
                         multiple DEXes to provide users with the best rates.
                        </div>
                        </div>
                    </div>
                    <div className="img-control">
                    <img src={ecosystem} alt="oops..."/>
                    </div>
                </div>

                <div className="fourth">
                    <div className="content">

                    </div>
                    <div className="img-control">

                    </div> 
                </div>
            </div>
        </div>   
    )
}

export default ContentPlatform;