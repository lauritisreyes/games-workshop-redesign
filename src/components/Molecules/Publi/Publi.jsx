import { Button } from "../../Atoms/Button/Button";
import { StyledPubli } from "./Styles.Publi";

export const Publi = () => {
    return (
        <StyledPubli className="Publi">
            <div className="Publi-text">
                <h2 className="Text-title">Conoce la Kortelunatika de Grinkrak</h2>
                <p className="Text-paragraph">Una banda de grots y un nuevo mazo de rivales llegana  Warhammer Underworlds</p>
                <Button>Empezar hoy</Button>
            </div>
        </StyledPubli>
    )
}