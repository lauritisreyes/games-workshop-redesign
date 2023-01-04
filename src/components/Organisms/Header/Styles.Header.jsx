import styled from 'styled-components'

export const StyledHeader = styled.header `
    width: 100%;
    background-color: white;
    .Header {
        &-container {
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 7rem;
        }
        &-icons {
            width: 24px;
            height: 24px;
        }
    }
`;

export const HeaderLogo = styled.div `
    width: 120px;
    max-height: 48px;
`;

export const HeaderNav = styled.nav `
    .Nav {
        &-ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        &-li {
            padding: 0rem 0.2rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        &-link {
            padding: 1rem 1rem;
            text-transform: uppercase;
            font-weight: 500;
            position: relative;
            border-radius: 4px;
            :hover {
                background-color: #F3F2F2;
            }
        }
    }
`;