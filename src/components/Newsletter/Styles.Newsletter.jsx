import styled from "styled-components";

export const StyledNewsletter = styled.div `
    height: 450px;
    width: 100%;
    background-color: red;
    background-image: url('./home/soldiers.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &::after {
        content: '';
        z-index: 2;
        background-color: #00000060;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .Newsletter {
        &-text {
            display: flex;
            text-align: center;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            z-index: 3;
            width: 100%;
            margin: 0 2rem;
            .Text {
                &-title {
                    font-size: 2.5rem;
                    color: white;
                    font-weight: bold;
                    line-height: 140%;
                }
                &-paragraph {
                    color: white;
                }
                &-form {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    align-items: center;
                    justify-content: center;
                    .Form {
                        &-email {
                            padding: 0.8rem 1rem;
                            background-color: white;
                            color: grey;
                            width: 300px;
                        }
                    }
                    @media (max-width: 600px){
                        flex-direction: column;
                        width: 100%;
                        .Form {
                            &-email {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
`;