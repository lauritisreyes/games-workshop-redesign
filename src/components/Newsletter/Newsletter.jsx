
import { Button } from "../Common/Button/Button";
import { StyledNewsletter } from "./Styles.Newsletter";


export const Newsletter = () => {
    return (
        <StyledNewsletter className="Newsletter">
            <div className="Newsletter-text">
                <h2 className="Text-title">Newsletter</h2>
                <p className="Text-paragraph">Get the very latest news, promotions, hobby tips and more from Games Workshop.</p>
                <form className="Text-form">
                    <input className="Form-email" type="email" placeholder="Your email"></input>
                    <Button>Subscribe</Button>
                </form>
            </div>
        </StyledNewsletter>
    )
}