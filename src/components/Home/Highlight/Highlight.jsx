import styled from "styled-components";



const StyledHighlight = styled.div `
    height: 450px;
    width: 100%;
    background-color: red;
    background-image: url('./home/troll-warhammer.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;


export const Highlight = () => {
    return (
        <StyledHighlight className="Highlight"></StyledHighlight>
    )
}