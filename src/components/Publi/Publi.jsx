import { Button } from "../Common/Button/Button";
import { StyledPubli } from "./Styles.Publi";

export const Publi = () => {
    return (
        <StyledPubli className="Publi">
            <div className="Publi-text">
                <h2 className="Text-title">Meet Grinkrak's Looncourt</h2>
                <p className="Text-paragraph">A grot warband and a new Rivals deck arrive for Warhammer Underworlds.</p>
                <Button>Find out more</Button>
            </div>
        </StyledPubli>
    )
}