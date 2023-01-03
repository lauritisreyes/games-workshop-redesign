import styled from "styled-components";
import { Button } from "../../Atoms/Button/Button";



const StyledNewsletter = styled.div `
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
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            z-index: 3;
            .Text {
                &-title {
                    font-size: 2.5rem;
                    color: white;
                    font-weight: bold;
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
                            width: 400px;
                        }
                    }
                }
            }
        }
    }
`;


export const Newsletter = () => {
    return (
        <StyledNewsletter className="Newsletter">
            <div className="Newsletter-text">
                <h2 className="Text-title">Newsletter</h2>
                <p className="Text-paragraph">Disfruta de lo último de Games Workshop: Noticias, promociones, consejos de hobby y mucho más.</p>
                <form className="Text-form">
                    <input className="Form-email" type="email" placeholder="Your email"></input>
                    <Button>Suscríbete</Button>
                </form>
            </div>
        </StyledNewsletter>
    )
}