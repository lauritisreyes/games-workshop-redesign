import styled from "styled-components";

const StyledBanner = styled.a `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .Banner {
        &-content {
            background-color: #F3F2F2;
            margin: auto;
            margin-bottom: 1rem;
            padding: 0.5rem 2rem;
            width: 80%;
            text-align: center;
            font-size: 0.8rem;
            @media (max-width: 700px){
                width: 100%;
                margin: 0 1rem 1rem 1rem;
            }
        }
    }
`;


export const Banner = () => {
    return (
        <StyledBanner className="Banner" href="#">
        <span className="Banner-content">Suscríbete a la Newsletter y disfruta de lo último de Games Workshop: Noticias, promociones, consejos de hobby y mucho más.</span></StyledBanner>
    )
}