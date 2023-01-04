
import { SearchIcon } from '../../Atoms/Icons/Icons';
import { HeaderLogo, HeaderNav, StyledHeader } from './Styles.Header';


export const Header = () => {

    const sections = [
        {id:0, text:'Nuevo'},
        {id:1, text:'Materiales'},
        {id:2, text:'Juegos en caja'},
        {id:3, text:'Regalos'},
        {id:4, text:'Community'}
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

                <div className='Header-icons'>
                    <SearchIcon/>
                </div>

            </div>
            
        </StyledHeader>
    )
}