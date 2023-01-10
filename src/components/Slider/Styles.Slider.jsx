import styled from "styled-components";

export const StyledSlider = styled.div `
width: 100%;
padding: 0 0 2rem 0;


.Slider {
    &-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        position: relative;
    }
    &-gallery {
        width: 1248px;
        .Gallery {
            &-container {
                width: 100%;
                overflow: hidden;
                margin-right: -1rem;
            }
        }
        @media (max-width: 1500px){
            width: 316px;
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
    .Card-media {
        width: 300px;
    }
`;

export const Control = styled.button `
width: 40px;
height: 40px;
background-color: black;
cursor: pointer;
top: 0;
bottom: 0;
margin: auto 0;
z-index: 2;
    .Chevron {
        color: white;
    }
`;

