import styled from "styled-components";

export const StyledRecommended = styled.div `
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 2rem 0 ;
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
            @media (max-width: 1600px){
                grid-template-columns: repeat(3, 300px);
                .Card {
                &:nth-of-type(1){
                    grid-row-start: 1;
                    grid-column-start: 1;
                }
                &:nth-of-type(2){
                    grid-row: span 1;
                    aspect-ratio: initial;
                    grid-column-start: 2;
                }
                &:nth-of-type(3){
                    grid-row-start: 1;
                    grid-column-start: 3;
                }
                &:nth-of-type(4){
                    grid-row-start: 2;
                    grid-column-start: 1;
                }
                &:nth-of-type(5){
                    grid-column: span 1;
                    grid-row: span 1;
                }
                }
            }
            @media (max-width: 1200px){
                grid-template-columns: repeat(2, 300px);
                .Card {
                &:nth-of-type(1){
                    grid-row-start: 1;
                    grid-column-start: 1;
                }
                &:nth-of-type(2){
                    grid-row: span 1;
                    aspect-ratio: initial;
                    grid-column-start: 2;
                }
                &:nth-of-type(3){
                    grid-row-start: 2;
                    grid-column-start: 1;
                }
                &:nth-of-type(4){
                    grid-row-start: 2;
                    grid-column-start: 2;
                }
                &:nth-of-type(5){
                    grid-column: span 1;
                    grid-row: span 1;
                }
                }
            }
            @media (max-width: 730px){
                grid-template-columns: repeat(2, 250px);
                
            }
            @media (max-width: 600px){
                grid-template-columns: repeat(1, 1fr);
                .Card {
                &:nth-of-type(1){
                    grid-row-start: 1;
                    grid-column-start: 1;
                }
                &:nth-of-type(2){
                    grid-row: span 1;
                    grid-row-start: 2;
                    aspect-ratio: initial;
                    grid-column-start: 1;
                }
                &:nth-of-type(3){
                    grid-row-start: 3;
                    grid-column-start: 1;
                }
                &:nth-of-type(4){
                    grid-row-start: 4;
                    grid-column-start: 1;
                }
                &:nth-of-type(5){
                    grid-column: span 1;
                    grid-row: span 1;
                }
                }
            }
        }
    }
`;