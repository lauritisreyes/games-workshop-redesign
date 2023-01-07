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
            @media (max-width: 1200px) {
                margin: 0 1rem;
                width: auto;
            }
        }
        &-icons {
            width: 24px;
            height: 24px;
            @media (max-width: 1200px) {
                display: none;
            }
        }
        &-burger {
            width: 24px;
            height: 24px;
            display: none;
            position: relative;
            &:after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: black;
                border-radius: 4px;
                position: absolute;
                top: 6px;
                left: 0;
            }
            &:before {
                content: '';
                width: 100%;
                height: 2px;
                background-color: black;
                border-radius: 4px;
                position: absolute;
                bottom: 6px;
                left: 0;
            }
            @media (max-width: 1200px) {
                display: block;
            }
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
            @media (max-width: 1200px) {
                display: none;
            }
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