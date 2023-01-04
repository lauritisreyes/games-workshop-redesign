import { StyledIntro } from "./Styles.Intro";
import { Button } from "../../Atoms/Button/Button";



export const Intro = () => {
    return (
        <StyledIntro className="Intro">
            <div className="Intro-background">
                <div className="Intro-text">
                    <h2 className="Text-title">Año nuevo, ejército nuevo</h2>
                    <p className="Text-paragraph">Empieza el año con un nuevo proyecto y organiza una fuerza completa</p>
                    <Button>Empezar hoy</Button>
                </div>
            </div>
        </StyledIntro>
    )
}