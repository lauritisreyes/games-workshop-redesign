import { StyledLogin } from "./Styles.Login"

export const Login = () => {
    return (
        <StyledLogin className="Login">
            <div className="Login-container">
                <div className="Login-right">
                    <a className="Login-link" href="">Contact with us</a>
                </div>
                <div className="Login-right">
                    <a className="Login-link" href="">Log In / Sign Up</a>
                </div>
            </div>
        </StyledLogin>
    )
}