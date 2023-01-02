import { useState } from "react";
import styled from "styled-components";

const StyledSlider = styled.div `
    width: 100%;
    padding: 6rem 0;
    .Slider {
        &-container {
            width: 80%;
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
                }
            }
        }
        &-controls {
            padding: 2rem 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
    }
`;


const SliderUl = styled.ul `
    position: relative;
    display: flex;
    padding: 0.5rem 0;
    transition: 0.2s ease;
    width: 200%;
`;


const Card = styled.li `
    position: relative;
    background-color: #F3F3F2;
    margin-right: 1rem;
    .Item {
        &-link {
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

const SliderButton = styled.button `
    width: 40px;
    height: 40px;
    background-color: #F3F3F2;
    cursor: pointer;
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
                        <SliderUl className="Slider-ul" style={ { transform : `translateX(-${ 12.5 * position}%)` }}>
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
                        </SliderUl>
                    </div>
                </div>
            </div>

        </StyledSlider>
    )
}



