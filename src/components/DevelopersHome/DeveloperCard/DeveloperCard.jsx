import "./DeveloperCard";
const DeveloperCard = ({header, src, text}) => {
    

    return(
        <div className="card-wrap">
            <h3 className="card-title">{header}</h3>
            <p className="card-text">{text}</p>
            <div>
                <img src={src} alt="some" className="card-image"/>
            </div>
        </div>
    )

}
export default DeveloperCard;