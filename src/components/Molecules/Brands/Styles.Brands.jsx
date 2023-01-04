import styled from "styled-components";

export const StyledCategories = styled.div `
    width: 100%;
    .Brands {
        &-container {
            width: 80%;
            margin: auto;
            padding: 3rem 0;
        }
        &-ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }
        &-li {
            width: 140px;
            height: 50px;
        }
    }
`;