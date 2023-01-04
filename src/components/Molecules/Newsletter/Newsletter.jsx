
import { Button } from "../../Atoms/Button/Button";
import { StyledNewsletter } from "./Styles.Newsletter";


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