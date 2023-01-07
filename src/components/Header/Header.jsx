
import { SearchIcon } from '../Common/Icons/Icons';
import { HeaderLogo, HeaderNav, StyledHeader } from './Styles.Header';


export const Header = () => {

    const sections = [
        {id:0, text:'New & Exclusive'},
        {id:1, text:'Materials'},
        {id:2, text:'Boxed Games'},
        {id:3, text:'Gifts'},
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
                <button className='Header-burger'></button>

            </div>
            
        </StyledHeader>
    )
}