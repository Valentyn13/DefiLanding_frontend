import "./HeaderCommunity.css"
import H_img from "./../../assets/community-header.webp"
const  HeaderCommunity = () => {

    return(
        <div className="header-community">
            <div className="container">
                <div className="main-content">
                    <div className="header-text">
                        <h1>
                            Defi<br/>
                            Community
                        </h1>
                        <p>Our Defi community is a globally distributed home to developers, token holders, validators, and members supporting the protocol.</p>
                    </div>
                    <div className="header-image">
                        <img src={H_img} alt='Some problems :('/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderCommunity;