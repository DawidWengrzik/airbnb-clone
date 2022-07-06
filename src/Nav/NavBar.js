import React from 'react';
import airbnb from '../airbnb-logo.png'
import Search from './Search';
import UserPanel from './UserPanel';

/* Import styles from styledcomponents */
import { StyledLogo, 
        StyledNavbar, 
        StyledLogoButton } from './Styles/navstyles';



const NavBar = () => {
    return(
        <StyledNavbar>
            <StyledLogoButton href='/'>
                <StyledLogo src={airbnb} alt='airbnb logo'/>
                <span>aribnb</span>
            </StyledLogoButton>
            <Search />
            <UserPanel />
        </StyledNavbar>
    )
}

export default NavBar;