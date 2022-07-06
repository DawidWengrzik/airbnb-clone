import React, { Component } from 'react'

/* Import icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faUser } from '@fortawesome/free-solid-svg-icons'

/* Imrport styles from stylescomponents */
import { 
    StyledUserPanel,
    StyledSearchIconDark, 
    StyledUserButton,
    StyledUserSetting,
    StyledHamburger,
    UserIconContainer,
    StyledHamburgerInner} from './Styles/navstyles';


export default class UserPanel extends Component {
  render() {
    return (
        <StyledUserPanel>
        <StyledUserButton>Zostań Gospodarzem</StyledUserButton>
        <StyledUserButton>
            <StyledSearchIconDark icon={faGlobe} />
        </StyledUserButton>
        <StyledUserSetting>
            <StyledHamburger>
                <StyledHamburgerInner></StyledHamburgerInner>
            </StyledHamburger>
            <UserIconContainer>
                <FontAwesomeIcon icon={faUser} />
            </UserIconContainer>
        </StyledUserSetting>
    </StyledUserPanel>
    )
  }
}
