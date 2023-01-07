import { StyledCard } from "./Styles.Card"


export const Card = ({text,img,alt}) => {
    return (
        <StyledCard className="Card">
            <a className="Card-link" href="#">
                <span className="Card-text">{text}</span>
                <div className="Card-media">
                    <img className="Card-img" src={img} alt={alt}/>
                </div>
            </a>
        </StyledCard>
    )
}