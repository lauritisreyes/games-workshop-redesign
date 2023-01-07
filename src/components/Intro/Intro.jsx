import { StyledIntro } from "./Styles.Intro";
import { Button } from "../Common/Button/Button";



export const Intro = () => {
    return (
        <StyledIntro className="Intro">
            <div className="Intro-background">
                <div className="Intro-text">
                    <h2 className="Text-title">New Year, New Army</h2>
                    <p className="Text-paragraph">Start the year with a fresh project and build towards a complete force</p>
                    <Button>Start today</Button>
                </div>
            </div>
        </StyledIntro>
    )
}