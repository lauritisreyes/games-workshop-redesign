import styled from "styled-components";

const StyledConditions = styled.div `
    background-color: black;
    margin: auto;
    padding: 0.5rem 2rem;
    width: 100%;
    .Conditions {
        &-text {
            text-align: center;
            font-size: 0.8rem;
            color: white;
        }
    }
`;


export const Conditions = () => {
    return (
        <StyledConditions className="COnditions">
            <p className="Conditions-text">Puedes darte de baja en cualquier momento.Si te suscribes, confirmas que tienes más de 13 años o que cuentas con el consentimiento de tus padres o tutores para suscribirte. Aviso de privacidad.</p>
        </StyledConditions>
    )
}