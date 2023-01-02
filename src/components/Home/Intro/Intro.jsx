import styled from "styled-components";

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
        }
    }
`;


export const Intro = () => {
    return (
        <StyledIntro className="Intro">
            <div className="Intro-background"></div>
        </StyledIntro>
    )
}