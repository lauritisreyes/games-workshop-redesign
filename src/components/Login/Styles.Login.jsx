import styled from "styled-components";

export const StyledLogin = styled.div `
    background-color: #252525;
    width: 100%;
    .Login {
        &-container {
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 0;
        }
        &-link {
            color: white;
        }
    }
`;