import styled from "styled-components";
import { Button } from "../../Common/Button/Button";

const StyledIntro = styled.section `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 450px;
    .Intro {
        &-background {
            background-image: url(./home/warhammer-main.jpg);
            background-position: center;
            background-repeat: none;
            background-size: cover;
            width: 100%;
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            position: relative;
            &::after {
                content: '';
                z-index: 2;
                background-color: #00000050;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        &-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            z-index: 3;
            .Text {
                &-title {
                    font-size: 2.5rem;
                    color: white;
                    font-weight: bold;
                }
                &-paragraph {
                    color: white;
                }
            }
        }
    }
`;


export const Intro = () => {
    return (
        <StyledIntro className="Intro">
            <div className="Intro-background">
                <div className="Intro-text">
                    <h2 className="Text-title">Año nuevo, ejército nuevo</h2>
                    <p className="Text-paragraph">Empieza el año con un nuevo proyecto y organiza una fuerza completa</p>
                    <Button>Empezar hoy</Button>
                </div>
            </div>
        </StyledIntro>
    )
}