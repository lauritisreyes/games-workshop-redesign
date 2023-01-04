import { StyledCategories } from "./Styles.Brands"

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