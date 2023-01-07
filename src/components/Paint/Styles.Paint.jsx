import styled from "styled-components";


export const StyledPaint = styled.div `
margin: 3rem 0;
.Paint {
    &-content {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
        justify-content: center;
        @media (max-width: 1200px){
                flex-direction: column;
            }
    }
    &-left {
        flex-basis: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 3;
    }
    &-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        margin: 4rem 0;
        text-align: center;
        .Text {
            &-title {
                font-size: 2.5rem;
                font-weight: bold;
                line-height: 130%;

            }
        }
    }
    &-right {
        flex-basis: 1;
        background-color: green;
        height: 100%;
        width: 100%;
    }
}
`;