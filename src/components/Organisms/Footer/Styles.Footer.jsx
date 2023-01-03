import styled from "styled-components"

export const StyledFooter = styled.div `
background-color: #191919;
    .Footer {
        &-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            padding: 2rem 0;
        }
    }
`;

export const FooterLinks = styled.ul `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    width: 80%;
    margin: auto;
    .Links {
        &-column {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1rem;
        }
        &-title {
            font-size: 0.8rem;
            text-transform: uppercase;
            color: white;
            font-weight: 600;
        }
        &-ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1rem;
        }
        &-a {
            color: grey;
            font-size: 1rem;
            transition: 0.2s ease;
            :hover {
                color: white;
            }
        }
    }
`;