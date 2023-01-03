import styled from "styled-components";

const StyledBanner = styled.a `
    background-color: #F3F2F2;
    margin: auto;
    margin-bottom: 1rem;
    padding: 0.5rem 2rem;
    width: 80%;
    text-align: center;
    font-size: 0.8rem;
`;


export const Banner = () => {
    return (
        <StyledBanner href="#">Suscríbete a la Newsletter y disfruta de lo último de Games Workshop: Noticias, promociones, consejos de hobby y mucho más.</StyledBanner>
    )
}