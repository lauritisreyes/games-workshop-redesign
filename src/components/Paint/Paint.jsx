
import { Button } from "../Common/Button/Button";
import { StyledPaint } from "./Styles.Paint";


export const Paint = () => {
    return (
        <StyledPaint className="Paint">
            <div className="Paint-content">
                <div className="Paint-left">
                    <div className="Paint-text">
                        <h2 className="Text-title">New year, new painting project</h2>
                        <p className="Text-paragraph">Make 2023 the year of new techniques and painted armies</p>
                        <Button primary className="Text-button">Get Started Today</Button>
                    </div>
                </div>
                <div className="Paint-right">
                    <img className="Paint-img" alt="" src="./home/painting.jpg"/>
                </div>
            </div>
            
        </StyledPaint>
    )
}