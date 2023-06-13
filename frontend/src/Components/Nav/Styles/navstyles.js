import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const primaryColor = '#ff385c';
const linesColor = '#e6e3e3'
const greyFont ='#949494'
const logoFont = `'Mulish', sans-serif`;

export const StyledNavbar = styled.nav`
    height: 80px;
    padding: 0 80px;
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid ${linesColor};
    justify-content: space-between;
    position: relative;
`
