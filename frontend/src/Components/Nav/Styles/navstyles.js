import styled from 'styled-components';

const linesColor = '#e6e3e3'

export const StyledNavbar = styled.nav`
    height: 80px;
    padding: 0 80px;
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid ${linesColor};
    justify-content: space-between;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background: white;
    z-index: 2;
`
