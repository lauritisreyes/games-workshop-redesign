import styled from "styled-components";

export const StyledRecommended = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    .Recommended {
        &-gallery {
            display: grid;
            grid-template-columns: repeat(4, 300px);
            gap: 16px;
            padding: 0.5rem 0;
            margin: 0 auto;
            .Card {
                &:nth-of-type(1){
                    grid-row-start: 2;
                    grid-column-start: 2;
                }
                &:nth-of-type(2){
                    grid-row: span 2;
                    aspect-ratio: initial;
                    grid-column-start: 3;
                }
                &:nth-of-type(3){
                    grid-row-start: 1;
                    grid-column-start: 4;
                }
                &:nth-of-type(4){
                    grid-row-start: 2;
                    grid-column-start: 4;
                }
                &:nth-of-type(5){
                    grid-column: span 2;
                    grid-row: span 2;
                }
            }
        }
    }
`;