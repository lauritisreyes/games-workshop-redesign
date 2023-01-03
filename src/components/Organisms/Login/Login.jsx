import styled from "styled-components";

const StyledLogin = styled.div `
    background-color: #252525;
    width: 100%;
    .Login {
        &-container {
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 0;
        }
        &-link {
            color: white;
        }
    }
`;

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