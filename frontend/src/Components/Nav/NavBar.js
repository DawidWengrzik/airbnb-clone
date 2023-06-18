import React from 'react'
import logo from '../../assets/images/airbnb-logo.png'
import smallLogo from '../../assets/images/small-logo.png'
import { StyledNavbar } from './Styles/navstyles'
import Search from './Search'
import UserPanel from './UserPanel'

const NavBar = () => {
  return (
    <StyledNavbar>
        <div className='logo-wapper'>
            <picture>
                <source
                media="(max-width: 1130px)"
                srcSet={smallLogo}
                height={'35px'}
                sizes="1130px"
                />
                <img src={logo} alt='Main navigation logo' height={'50px'}/>
            </picture>
        </div>
        <Search />
        <UserPanel />
    </StyledNavbar>
  )
}

export default NavBar