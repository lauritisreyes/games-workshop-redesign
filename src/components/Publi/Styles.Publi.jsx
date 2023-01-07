import styled from "styled-components";

export const StyledPubli = styled.div `
    width: 80%;
    height: 450px;
    background-image: url('./home/troll-warhammer.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &::after {
        content: '';
        z-index: 2;
        background-color: #00000060;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    @media (max-width: 1000px){
        width: 100%;
    }
    .Publi {
        &-text {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            z-index: 3;
            width: 100%;
            margin: 0 2rem;
            .Text {
                &-title {
                    font-size: 2.5rem;
                    color: white;
                    font-weight: bold;
                    line-height: 140%;
                }
                &-paragraph {
                    color: white;
                }
            }
        }
    }
`;