import styled from "styled-components";

const StyledCategories = styled.div `
    width: 100%;
    .Brands {
        &-container {
            width: 80%;
            margin: auto;
            padding: 3rem 0;
        }
        &-ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }
        &-li {
            width: 140px;
            height: 50px;
        }
    }
`;


export const Brands = () => {

    const data = [
        {id:0, src:'./home/warhammer-40000.jpg', alt:''},
        {id:1, src:'./home/the-horus-heresy.jpg', alt:''},
        {id:2, src:'./home/black-library.jpg', alt:''},
        {id:3, src:'./home/age-of-sigmar.jpg', alt:''},
    ]

    return (
        <StyledCategories className="Brands">
            <div className="Brands-container">
                <ul className="Brands-ul">
                    { data.map ( ({ id, src, alt})=>
                        <li key={id} className="Brands-li">
                            <a className="Brands-link" src="" alt="">
                                <img className="Brands-img" src={src} alt={alt}/>
                            </a>
                        </li>
                    ) }
                </ul>
            </div>

        </StyledCategories>
    )
}