import styled from "styled-components"

const StyledFooter = styled.div `
background-color: #191919;
    .Footer {
        &-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            padding: 2rem 0;
        }
    }
`;

const FooterLinks = styled.ul `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    width: 80%;
    margin: auto;
    .Links {
        &-column {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1rem;
        }
        &-title {
            font-size: 0.8rem;
            text-transform: uppercase;
            color: white;
            font-weight: 600;
        }
        &-ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1rem;
        }
        &-a {
            color: grey;
            font-size: 1rem;
            transition: 0.2s ease;
            :hover {
                color: white;
            }
        }
    }
`;

export const Footer = () => {

    const data = [
        {
            id:0,
            title:'Support',
            links: [
                { id:0, text: 'Find your Store'},
                { id:1, text: 'Contact Us'},
                { id:2, text: 'Delivery'},
                { id:3, text: 'Returns'},
                { id:4, text: 'Shopping FAQs'}
            ]  
        },
        {
            id:1,
            title:'Gift Ideas & Shopping',
            links: [
                { id:0, text: 'Boxed Games'},
                { id:1, text: 'Virtual Vouchers'},
                { id:2, text: 'Gift Lists'},
                { id:3, text: 'Warhammer Merchandise'},
                { id:4, text: 'Forge World'},
                { id:5, text: 'Black Library'}
            ]  
        },
        {
            id:2,
            title:'Warhammer Games',
            links: [
                { id:0, text: 'Warhammer 40,000'},
                { id:1, text: 'Warhammer Age of Sigmar'},
                { id:2, text: 'Warhammer The horus Heresy'},
                { id:3, text: 'Middle-earth Strategy Battle Game'}
            ]  
        },
        {
            id:3,
            title:'Warhammer+',
            links: [
                { id:0, text: 'My Warhammer'},
                { id:1, text: 'Warhammer TV'},
                { id:2, text: 'Warhammer Vault'},
            ]  
        },
        {
            id:4,
            title:'Games Workshop',
            links: [
                { id:0, text: 'Press Room'},
                { id:1, text: 'Investor Relations'},
                { id:2, text: 'Jobs'},
                { id:3, text: 'Retailers'},
                { id:4, text: 'Privacy Notice'},
                { id:5, text: 'Product Recall'},
                { id:6, text: 'Modern Slavery Statement'},
                { id:7, text: 'Cookies preferences'}
            ]  
        },
    ]


    return (
        <StyledFooter className="Footer">
            <div className="Footer-container">
                <FooterLinks className="Footer-links">
                    { data.map ( ({id,title,links}) => 
                        <li key={id} className="Links-column">
                            <span className="Links-title">{title}</span>
                            <ul className="Links-ul">
                                { links.map ( ({id, text}) => 
                                    <li className="Links-li" key={id}>
                                        <a className="Links-a" href="#">{text}</a>
                                    </li>
                                ) }
                            </ul>
                        </li>
                    )}
                </FooterLinks>
            </div>
        </StyledFooter>
    )
}