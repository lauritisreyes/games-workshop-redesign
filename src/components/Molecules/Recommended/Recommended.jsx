
import { Card } from "../../Atoms/Card/Card";
import { StyledRecommended } from "./Styled.Recommended";



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
                { data.map ( (data) =>
                    <Card key={data.id} {...data}/>
                )}
            </ul>
        </StyledRecommended>
    )
}