import styled from 'styled-components'

const StyledHeader = styled.header `
    width: 100%;
    background-color: white;
    .Header {
        &-container {
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 7rem;
        }
        &-icons {
            width: 24px;
            height: 24px;
            background-color: blue;
        }
    }
`;

const HeaderLogo = styled.div `
    width: 120px;
    max-height: 48px;
`;

const HeaderNav = styled.nav `
    .Nav {
        &-ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        &-link {
            padding: 1rem 1.5rem;
            text-transform: uppercase;
            font-weight: 500;
            :hover {
                color: green;
            }
        }
    }
`;


export const Header = () => {

    const sections = [
        {id:0, text:'Nuevo'},
        {id:1, text:'Pintura y modelismo'},
        {id:2, text:'Juegos en caja'},
        {id:3, text:'Regalos'},
        {id:4, text:'Warhammer community'}
    ]

    return (
        <StyledHeader className='Header'>
            <div className='Header-container'>
                <HeaderLogo className='Header-logo'>
                    <img src="./general/logo-games-workshop.png" alt=""/>
                </HeaderLogo>

                <HeaderNav className='Header-nav'>
                    <ul className='Nav-ul'>
                        {sections.map ( ({text, id})=>
                            <li key={id} className='Nav-li'>
                                <a className='Nav-link' href="" alt="">{text}</a>
                            </li>
                        )}
                    </ul>
                </HeaderNav>

                <div className='Header-icons'></div>

            </div>
            
        </StyledHeader>
    )
}