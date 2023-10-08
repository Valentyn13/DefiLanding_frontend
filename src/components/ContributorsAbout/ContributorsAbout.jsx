import ContributorCard from "./ContributorCard";
import "./ContributorsAbout.css";
import cardData from './contributors.json'
import {v4} from "uuid"
const ContributorsAbout = () => {

    return(
        <div className="contributors-about">
            <div className="container">
                <h2>Active contributors</h2>
                <div className="contributor-list">
                {cardData.map(({name,src,position}) => {
                        return (
                            <ContributorCard key={v4()} url={src} name={name} position={position}/>
                        )
                })}
                </div>
            </div>
        </div>
    )
}
export default ContributorsAbout;