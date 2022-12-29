import styled from "styled-components";

const StyledRecommended = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 0;
    .Recommended {
        &-gallery {
            width: 80%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            padding: 0.5rem 0;
        }
    }
`;

const InfoCard = styled.li `
    background-color: white;
    width: 100%;
    aspect-ratio: 1;
    grid-column: span 2;
    grid-row: span 2;
`;

const Card = styled.li `
    background-color: #F3F2F2;
    width: 100%;
    aspect-ratio: 1;
    &:nth-of-type(2){
        grid-row: span 2;
        aspect-ratio: initial;
    }
    &:nth-of-type(5){
        grid-column: span 2;
        grid-row: span 2;
    }
    .Item {
        &-link {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            :hover {
                .Item-media {
                    transform: scale(1.1);
                }
            }
        }
        &-media {
            transition: 0.5s;
        }
        &-text {
            position: absolute;
            bottom: 1rem;
            text-align: center;
            left: 0;
            right: 0;
            margin: auto;
            font-size: 0.8rem;
            text-transform: uppercase;
        }
    }
`;

export const Recommended = () => {

    const data = [
        { id:0, img:'./home/breakaboss.png', alt:'', text:'Break a Boss'},
        { id:1, img:'./home/caballero-execrador.png', alt:'', text:'Caballero Execrador'},
        { id:2, img:'./home/chaos-spawn.png', alt:'', text:'Chaos Spawn'},
        { id:6, img:'./home/aberrants.png', alt:'', text:'Aberrants'},
        { id:3, img:'./home/castigator.png', alt:'', text:'Castigator'},
        { id:4, img:'./home/orlock.png', alt:'', text:'Orlock Outrider Quads'},
        { id:5, img:'./home/stegadon.png', alt:'', text:'Stegadon'},
    ]


    return (

        <StyledRecommended className="Recommended">
            
            <ul className="Recommended-gallery">
                <InfoCard className="Gallery-item"></InfoCard> 
                { data.map ( ({id,alt, text, img}) =>
                    <Card className="Gallery-item" key={id} href="#">
                        <a className="Item-link" href="#">
                            <span className="Item-text">{text}</span>
                            <div className="Item-media">
                                <img className="Item-img" src={img} alt={alt}/>
                            </div>
                        </a>
                    </Card>
                )}
            </ul>
        </StyledRecommended>
    )
}