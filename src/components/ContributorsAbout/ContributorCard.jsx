import "./ContributorsAbout.css"
const ContributorCard = ({name, position, url}) => {
    return(
        <div className="contributor-card">
            <div>
                <img src={url} className="contributor-photo" alt="Anton Bukov"/>
                <p className="contributor-name">
                {name}
                </p>
                <p className="contributor-postion">
                {position}
                </p>
            </div>
            <div className="contributor-contacts"></div>

        </div>
    )
}

export default ContributorCard;