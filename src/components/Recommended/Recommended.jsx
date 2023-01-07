
import { Card } from "../Common/Card/Card";
import { StyledRecommended } from "./Styled.Recommended";



export const Recommended = () => {

    const data = [
        { id:0, img:'./home/breakaboss.png', alt:'', text:'Break a Boss'},
        { id:1, img:'./home/Bjorn.the.Fell-Handed.png', alt:'', text:'Bjorn the Fell-Handed'},
        { id:2, img:'./home/caballero-execrador.png', alt:'Warhammer miniature of a Knight Desecrator', text:'Knight Desecrator'},
        { id:3, img:'./home/chaos-spawn.png', alt:'Warhammer miniatures of Chaos Spawns', text:'Chaos Spawn'},
        { id:4, img:'./home/aberrants.png', alt:'Warhammer miniatures of Aberrants', text:'Aberrants'},
        { id:5, img:'./home/castigator.png', alt:'', text:'Castigator 6'},
        { id:6, img:'./home/orlock.png', alt:'Warhammer miniatures of Orlock Outrider Quads', text:'Orlock Outrider Quads'},
        { id:7, img:'./home/stegadon.png', alt:'Warhammer miniature of a Stegadon', text:'Stegadon'},

    ]

    return (

        <StyledRecommended className="Recommended"> 
            <ul className="Recommended-gallery">
                { data.map ( (data) =>
                    <Card key={data.id} {...data}/>
                )}
            </ul>
        </StyledRecommended>
    )
}