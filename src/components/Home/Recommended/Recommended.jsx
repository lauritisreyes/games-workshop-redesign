import styled from "styled-components";

const StyledRecommended = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    .Recommended {
        &-gallery {
            display: grid;
            grid-template-columns: repeat(4, 300px);
            gap: 16px;
            padding: 0.5rem 0;
            margin: 0 auto;
        }
    }
`;


const Card = styled.li `
    background-color: #F3F2F2;
    width: 100%;
    aspect-ratio: 1;
    &:nth-of-type(1){
        grid-row-start: 2;
        grid-column-start: 2;
    }
    &:nth-of-type(2){
        grid-row: span 2;
        aspect-ratio: initial;
        grid-column-start: 3;
    }
    &:nth-of-type(3){
        grid-row-start: 1;
        grid-column-start: 4;
    }
    &:nth-of-type(4){
        grid-row-start: 2;
        grid-column-start: 4;
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
        { id:0, img:'./home/breakaboss.png', alt:'', text:'1'},
        { id:1, img:'./home/breakaboss.png', alt:'', text:'2'},
        { id:2, img:'./home/caballero-execrador.png', alt:'', text:'Caballero Execrador 3'},
        { id:3, img:'./home/chaos-spawn.png', alt:'', text:'Chaos Spawn 4'},
        { id:4, img:'./home/aberrants.png', alt:'', text:'Aberrants 5'},
        { id:5, img:'./home/castigator.png', alt:'', text:'Castigator 6'},
        { id:6, img:'./home/orlock.png', alt:'', text:'Orlock Outrider Quads 7'},
        { id:7, img:'./home/stegadon.png', alt:'', text:'Stegadon 8'},

    ]


    return (

        <StyledRecommended className="Recommended"> 
            <ul className="Recommended-gallery">
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