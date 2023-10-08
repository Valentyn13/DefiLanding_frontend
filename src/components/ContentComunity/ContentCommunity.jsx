import "./ContentCommunity.css"
import telegramIcon from "./../../assets/telegram.webp"
import discordIcon from "./../../assets/discord.webp"
import twitterIcon from "./../../assets/twitter.webp"
const ContentCommunity =() => {
    return (
        <div className="content-community">
            <div className="container">
                <div className="card-container">
                    <div className="join-card telegram">
                        <h2>Join Telegram</h2>
                        <a href="https://t.me/+y3gcEp4AUMxjNjk6">
                            <div className="icon-wrapper">
                                <img src={telegramIcon}  alt="join icon"/>
                            </div>
                        </a>
                        <div className="card-shadow telegram-shadow"></div>
                    </div>
                    <div className="join-card discord">
                        <h2>Join Discord</h2>
                        <a href="https://discord.com/invite/1inch">
                            <div className="icon-wrapper">
                                <img src={discordIcon} alt="join icon"/>
                            </div>
                        </a>
                        <div className="card-shadow discord-shadow"></div>
                    </div>
                    <div className="join-card twitter">
                        <h2>Join Twitter</h2>
                        <a href="https://twitter.com/binance">
                            <div className="icon-wrapper">
                                <img src={twitterIcon} alt="join icon"/>
                            </div>
                        </a>
                        <div className="card-shadow twitter-shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCommunity;