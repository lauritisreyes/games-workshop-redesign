import styled, { useTheme } from "styled-components";

export const StyledButton = styled.button `
    padding: 0.8rem 2rem;
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};
    transition:0.2s ease;
    &:hover {
        color: grey;
    }
`;

export const Button = (props) => {
    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    )
}

