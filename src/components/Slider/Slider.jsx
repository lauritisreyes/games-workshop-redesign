import { useState, useEffect } from "react";
import { Card } from "../Common/Card/Card";
import { ChevronLeft, ChevronRight } from "../Common/Icons/Icons";
import { Control, SliderUl, StyledSlider } from "./Styles.Slider";



export const Slider = () => {


    const data = [
        { id:0, img:'./home/Bloodpelt Hunter.png', alt:'Warhammer miniature of a Bloodpelt Hunter', text:'Bloodpelt Hunter'},
        { id:1, img:'./home/Promethium.Tanks.png', alt:'Warhammer miniature of Promethium Tanks', text:'Promethium Tanks'},
        { id:2, img:'./home/Goliath.Maulers.png', alt:'Warhammer miniatures of Goliath Maulers', text:'Goliath Maulers'},
        { id:3, img:'./home/Goliath.Stimmers.png', alt:'Warhammer miniatures of Goliath Stimmers', text:'Goliath Stimmers'},
        { id:4, img:'./home/Escher.Gang.png', alt:'Warhammer miniature of a Escher Gang', text:'Escher Gang'},
        { id:5, img:'./home/Bjorn.the.Fell-Handed.png', alt:'Warhammer miniature of Bjorn the Fell Handed', text:'Goliath Gang'},
        { id:6, img:'./home/Spite-Revenant.png', alt:'Warhammer miniature of a Spite Revenant', text:'Spite Revenant'},
        { id:7, img:'./home/Kurnoth.Hunter.png', alt:'Warhammer miniature of a Kurnoth Hunter', text:'Kurnoth Hunter'},
    ]

    let [ position, setPosition ] = useState(0)
    let [ maxPosition, setMaxPosition ] = useState(4)
    let [ windowWidth, setWindowWidth ] = useState (window.innerWidth)

    useEffect (( ) => {
        window.addEventListener ('resize', ()=> {
            setWindowWidth ( window.innerWidth )
        })
    }, [])
    if (window.innerWidth >= 1500){
        maxPosition = 4
    } else if ( window.innerWidth < 1500 ){
        maxPosition = 7
    }


    const RightClick = () => {
        let newPosition = ( position === maxPosition ? 0 : position + 1)
        setPosition ( newPosition )
    }

    const LeftClick = () => {
        let newPosition = (position === 0 ? maxPosition : position - 1)
        setPosition ( newPosition )
    }



    return (
        <StyledSlider className="Slider">
            <div className="Slider-container">
                <Control className="Controls-left" onClick={LeftClick}><ChevronLeft/></Control>
                <div className="Slider-gallery">
                    <div className="Gallery-container">
                        <SliderUl className="Slider-ul" style={ { transform : `translateX(-${ 316 * position}px)` }}>
                            { data.map ( (data) =>
                                <Card key={data.id} {...data}/>
                            )}
                        </SliderUl>
                    </div>
                </div>
                <Control className="Controls-right" onClick={RightClick}><ChevronRight/></Control>
            </div>
        </StyledSlider>
    )
}



