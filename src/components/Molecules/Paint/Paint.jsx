
import { Button } from "../../Atoms/Button/Button";
import { StyledPaint } from "./Styles.Paint";


export const Paint = () => {
    return (
        <StyledPaint className="Paint">
            <div className="Paint-content">
                <div className="Paint-left">
                    <div className="Paint-text">
                        <h2 className="Text-title">Año nuevo, ejército nuevo</h2>
                        <p className="Text-paragraph">Empieza el año con un nuevo proyecto y organiza una fuerza completa</p>
                        <Button className="Text-button">Empezar hoy</Button>
                    </div>
                </div>
                <div className="Paint-right">
                    <img className="Paint-img" alt="" src="./home/painting.jpg"/>
                </div>
            </div>
            
        </StyledPaint>
    )
}