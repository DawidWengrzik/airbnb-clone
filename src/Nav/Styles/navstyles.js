import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const primaryColor = '#ff385c';
const linesColor = '#cdcdcd'
const greyFont ='#949494'
const logoFont = `'Mulish', sans-serif`;

export const StyledNavbar = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 75px;
    justify-content: space-between;
    border-bottom: 1px ${linesColor} solid;
    @media screen and (max-width: 1130px){
        padding: 0 40px; 
    }
    @media screen and (max-width: 750px){
        padding: 0; 
    }
    
`

export const StyledLogoButton = styled.a`
    display: flex;
    width: 20%;
    align-items: center;
    gap: 8px;
    font-size: 23px;
    text-decoration: none;
    color: ${primaryColor};
    font-weight: bold;
    font-family: ${logoFont};
    @media screen and (max-width: 750px){
        display: none;
    }

    & > span {
        @media screen and (max-width: 1130px){
            display: none;
        }
    }
    
`

export const StyledLogo = styled.img`
    width: 28px;
    height: 32px;
`

export const StyledSearch = styled.div`
    &:hover  {
        
        -webkit-box-shadow: 0px 6px 28px -15px rgba(117, 117, 117, 1);
        -moz-box-shadow: 0px 6px 28px -15px rgba(117, 117, 117, 1);
        box-shadow: 0px 6px 28px -15px rgba(117, 117, 117, 1);
        transition: 0.5s ease-in-out;
    }
    -webkit-box-shadow: 0px 6px 23px -19px rgba(117, 117, 117, 1);
    -moz-box-shadow: 0px 6px 23px -19px rgba(117, 117, 117, 1);
    box-shadow: 0px 6px 23px -19px rgba(117, 117, 117, 1);
    width: 50vw;
    display: flex;
    align-items: center;
    max-width: 450px;
    min-width: 285px;
    margin: 0 25px;
    padding: 0 5px;
    height: 45px;
    border: 1px ${linesColor} solid;
    border-radius: 100px 100px 100px 100px; 
    
    @media screen and (max-width: 750px){
        max-width: none;
        width: 90vw;
        display:flex;
    }
`
export const StyledSearchButtons = styled.button`
    &:hover {
        cursor: pointer;
    }
    width: 33%;
    height: 100%;
    background-color: transparent;
    font-size: 0.80rem;
    font-weight: bold;
    border: none;
    font-family: ${logoFont};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    @media screen and (max-width: 750px){
        display: none;
    }
    
    &:first-child {
        border-radius: 100px 0 0 100px;
    }
    &:last-child {
        box-sizing: content-box;
        color: ${greyFont};
        border-radius: 0 100px 100px 0;
        font-size: 0.80rem;
        font-weight: normal;
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media screen and (max-width: 750px){
            display: none;
        }
        & > span {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        & > svg {
            margin-left: 5px;
        }
    }
    
`

export const StyledSearchIcon = styled(FontAwesomeIcon)`
    color: #ffffff;
    padding: 8px 9px;
    background-color: ${primaryColor};
    border-radius: 50%;
    
`

export const StyledSearchIconDark = styled(FontAwesomeIcon)`
    color: '#000000';
`

export const StyledVerticalLine = styled.span`
    width: 1px;
    height: 60%;
    border-right: 1px ${linesColor} solid;
    @media screen and (max-width: 750px){
        display: none;
    }
` 
export const StyledUserPanel = styled.div`
    height: 45px;
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 750px){
        display: none;
    }
`

export const StyledUserButton = styled.button`
    height: 100%;
    background-color: transparent;
    border-radius: 100px 100px 100px 100px; 
    min-width: 40px;
    border: none;
    padding: 0 15px;
    cursor: pointer;
    font-weight: bold;
    font-family: ${logoFont};
    font-size: 0.80rem;
    white-space: nowrap;
    &:hover {
        background-color: #f0f1f3;
    }
`

export const StyledUserSetting = styled.button`
    border-radius: 100px 100px 100px 100px; 
    min-width: 80px;
    background-color: transparent;
    cursor: pointer;
    max-width: 75px;
    height: 45px;
    border: 1px ${linesColor} solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 5px;
    margin-left: 10px;
    &:hover{ 
        -webkit-box-shadow: 0px 6px 28px -15px rgba(117, 117, 117, 1);
        -moz-box-shadow: 0px 6px 28px -15px rgba(117, 117, 117, 1);
        box-shadow: 0px 6px 28px -15px rgba(117, 117, 117, 1);
        transition: 0.5s ease-in-out;
}
`

export const StyledHamburger = styled.span`
    width: 15px;
    height: 15px;
    position: relative;
    margin: 0 10px;
`

const singleInner = `
width: 100%;
height: 2px;
background-color: black;
position: absolute; 
`

export const StyledHamburgerInner = styled.span`
    ${singleInner}
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    &:after {
        ${singleInner}
        content: '';
        left: 0;
        top: 4.5px;
    }
    &:before {
        ${singleInner}
        content: '';
        left: 0;
        top: -5px;
    }
`

export const UserIconContainer = styled.div`
    background-color: ${greyFont};
    padding: 2px;
    color: white;
    padding: 8px 9px;
    border-radius: 50%;
`


// Search for media view

export const StyledMobileSearchButton = styled.button`
    @media screen and (min-width: 750px){
        display: none;
    }
    cursor: pointer;
    width: 80%;
    height: 100%;
    border-radius: 100px 0 0 100px;
    display: flex;
    justify-content: center;
    align-content: stretch;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0;
    background-color: transparent;
    border: none;
    & > svg {
        color: black;
        margin-right: 15px;
        font-size: 18px;
        background-color: transparent;
    }
    & > span {
        width: 80%;
        text-align: start;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    & > span:first-of-type {
        font-size: 15px;
        font-weight: bold;
    }
    & > span:last-of-type {
        font-size: 12.3px;
        color: ${greyFont};
    }
`
export const StyledMobileFiltersButton = styled.button`
    @media screen and (min-width: 750px){
        display: none;
    }
    cursor: pointer;
    width: 20%;
    height: 100%;
    border-radius: 0 100px 100px 0;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & > svg {
        background-color: transparent;
        color: black;
        font-size: 17px;
        border: solid 1px ${linesColor};
    }
    
`

export const StyledSearchButtonList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    list-style-position: inside;
    & > li:first-of-type {
        list-style: none;
    }
`

export const StyledListItem = styled.li`
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`