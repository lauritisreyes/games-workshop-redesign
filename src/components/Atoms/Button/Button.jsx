import styled, { useTheme } from "styled-components";

export const Button = styled.button `
    padding: 0.8rem 2rem;
    background-color: ${ props => props.theme.color.white };
    color: ${ props => props.theme.color.black };
    transition:0.2s ease;
    &:hover {
        color: grey;
    }
`;

