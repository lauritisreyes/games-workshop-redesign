import styled, { useTheme } from "styled-components";

export const StyledCard = styled.li `
    position: relative;
    background-color: #F3F3F2;
    .Card {
        &-link {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 100%;
            height: 100%;
            :hover {
                .Card-media {
                    transform: scale(1.1);
                }
            }
        }
        &-media {
            transition: 0.5s;
        }
        &-text {
            position: absolute;
            bottom: 1rem;
            text-align: center;
            left: 0;
            right: 0;
            margin: auto;
            font-size: ${props => props.theme.fontSize.small};
            text-transform: uppercase;
        }
    }
`;