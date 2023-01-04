import styled from "styled-components";
import { useTheme } from "styled-components";

export const StyledConditions = styled.div `
    background-color: black;
    margin: auto;
    padding: 0.5rem 2rem;
    width: 100%;
    .Conditions {
        &-text {
            text-align: center;
            font-size: ${ props => props.theme.fontSize.small };
            color: white;
        }
    }
`;
