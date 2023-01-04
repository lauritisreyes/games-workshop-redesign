import { useState } from "react";
import { Card } from "../../Atoms/Card/Card";
import { SliderButton, SliderUl, StyledSlider } from "./Styles.Slider";



export const Slider = () => {

    const data = [
        { id:0, img:'./home/caballero-execrador.png', alt:'', text:'Break a Boss'},
        { id:1, img:'./home/breakaboss.png', alt:'', text:'Break a Boss'},
        { id:2, img:'./home/chaos-spawn.png', alt:'', text:'Break a Boss'},
        { id:3, img:'./home/aberrants.png', alt:'', text:'Break a Boss'},
        { id:4, img:'./home/breakaboss.png', alt:'', text:'Break a Boss'},
        { id:5, img:'./home/chaos-spawn.png', alt:'', text:'Break a Boss'},
        { id:6, img:'./home/orlock.png', alt:'', text:'Break a Boss'},
        { id:7, img:'./home/stegadon.png', alt:'', text:'Break a Boss'},
    ]

    let [ position, setPosition ] = useState(0)

    const RightClick = () => {
        let index = ( position === 4 ? 0 : position + 1)
        setPosition ( index )
        console.log (position)
    }

    const LeftClick = () => {
        let index = (position === 0 ? 4 : position - 1)
        setPosition ( index )
        console.log (position)
    }


    return (
        <StyledSlider className="Slider">
            <div className="Slider-container">
                <div className="Slider-controls">
                    <SliderButton className="Controls-left" onClick={LeftClick}/>
                    <SliderButton className="Controls-right" onClick={RightClick}/>
                </div>
                <div className="Slider-gallery">
                    <div className="Gallery-container">
                        <SliderUl className="Slider-ul" style={ { transform : `translateX(-${ 316 * position}px)` }}>
                            { data.map ( (data) =>
                                <Card key={data.id} {...data}/>
                            )}
                        </SliderUl>
                    </div>
                </div>
            </div>

        </StyledSlider>
    )
}



