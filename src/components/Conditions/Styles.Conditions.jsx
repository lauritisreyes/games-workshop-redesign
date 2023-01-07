import styled from "styled-components";
import { useTheme } from "styled-components";

export const StyledConditions = styled.div `
    background-color: black;
    margin: auto;
    padding: 0.5rem 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px){
        flex-direction: column;
    }
    .Conditions {
        &-text {
            text-align: center;
            font-size: ${ props => props.theme.fontSize.small };
            color: white;
            display: inline-block;
        }
        &-link {
            font-size: ${ props => props.theme.fontSize.small };
            color: white;
            display: inline-block;
            text-decoration: underline;
        }
    }
`;
