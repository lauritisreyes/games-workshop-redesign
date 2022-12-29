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

const Card = styled.li `
    background-color: #F3F2F2;
    width: 100%;
    aspect-ratio: 1;
    .Gallery {
        &-link {
            width: 100%;
            height: 100%;
        }
    }
`;

export const Recommended = () => {

    const data = [
        { id:0, img:'./home/breakaboss.png', alt:'', text:'Break a Boss'},
        { id:1, img:'./home/caballero-execrador.png', alt:'', text:'Caballero Execrador'},
        { id:2, img:'./home/chaos-spawn.png', alt:'', text:'Chaos Spawn'},
        { id:3, img:'./home/castigator.png', alt:'', text:'Castigator'}
    ]

    const data2 = [
        { id:4, img:'./home/domador.png', alt:'', text:'Jefe Domador en Troggoth Lodoso'},
        { id:5, img:'./home/stegadon.png', alt:'', text:'Stegadon'},
        { id:6, img:'./home/orlock.png', alt:'', text:'Orlock Outrider Quads'},
        { id:7, img:'./home/aberrants.png', alt:'', text:'Aberrants'}
    ]

    return (

        <StyledRecommended className="Recommended">
            <ul className="Recommended-gallery">
                { data.map ( ({id,alt, img}) => 
                    <Card className="Gallery-li" key={id} href="#">
                        <a className="Gallery-link" href="#">
                            <div className="Gallery-media">
                                <img className="Gallery-img" src={img} alt={alt}/>
                            </div>
                        </a>
                    </Card>
                )}
            </ul>
            <ul className="Recommended-gallery">
                { data2.map ( ({id,alt, img}) => 
                    <Card className="Gallery-li" key={id} href="#">
                        <a className="Gallery-link" href="#">
                            <div className="Gallery-media">
                                <img className="Gallery-img" src={img} alt={alt}/>
                            </div>
                        </a>
                    </Card>
                )}
            </ul>
        </StyledRecommended>
    )
}