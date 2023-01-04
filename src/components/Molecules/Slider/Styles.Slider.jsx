import styled from "styled-components";

export const StyledSlider = styled.div `
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


export const SliderUl = styled.ul `
position: relative;
display: flex;
gap: 16px;
padding: 0.5rem 0;
transition: 0.2s ease;
width: 200%;
`;

export const SliderButton = styled.button `
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

