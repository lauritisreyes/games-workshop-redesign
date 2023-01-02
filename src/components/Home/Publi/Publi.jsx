import styled from "styled-components";

const StyledPubli = styled.div `
    width: 80%;
    height: 450px;
    background-image: url('./home/soldiers.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
`;

export const Publi = () => {
    return (
        <StyledPubli></StyledPubli>
    )
}