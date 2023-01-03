import { useState } from "react";
import styled from "styled-components";
import { Card } from "../../Atoms/Card/Card";

const StyledSlider = styled.div `
    width: 100%;
    padding: 0 0 2rem 0;
    .Slider {
        &-container {
            width: 1248px;
            margin: auto;
            position: relative;
        }
        &-gallery {
            width: 100%;
            margin: auto;
            .Gallery {
                &-container {
                    width: 100%;
                    overflow: hidden;
                    margin-right: -1rem;
                }
            }
        }
    }
`;


const SliderUl = styled.ul `
    position: relative;
    display: flex;
    gap: 16px;
    padding: 0.5rem 0;
    transition: 0.2s ease;
    width: 200%;
`;

const SliderButton = styled.button `
    width: 40px;
    height: 40px;
    background-color: black;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 2;
    &.Controls {
        &-right {
            right: 0;
        }
        &-left {
            left: 0;
        }
    }
`;



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



