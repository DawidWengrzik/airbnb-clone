import React from 'react'

/* Imrport styles from stylescomponents */
import { 
    StyledSearch, 
    StyledSearchButtons, 
    StyledVerticalLine, 
    StyledSearchIcon,
    StyledMobileFiltersButton,
    StyledMobileSearchButton,
    StyledSearchButtonList,
    StyledListItem } from './Styles/navstyles'
    
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'


export default function Search() {
  return (
    <StyledSearch>
        {/* Display if @media vw < 750px */}
        <StyledMobileSearchButton>
            <StyledSearchIcon icon={faMagnifyingGlass} />  
            <span>Gdzie jedziesz?</span>
            <span>
                <StyledSearchButtonList>
                    <StyledListItem><span>Gdziekolwiek</span></StyledListItem>
                    <StyledListItem><span>Dowolny tydzień</span></StyledListItem>
                    <StyledListItem><span>Dodaj gości</span></StyledListItem>
                </StyledSearchButtonList>
            </span>
        </StyledMobileSearchButton>
        <StyledMobileFiltersButton>
            <StyledSearchIcon icon={faFilter} />
        </StyledMobileFiltersButton>
        {/* Desktop view*/}
        <StyledSearchButtons>Gdziekolwiek</StyledSearchButtons>
        <StyledVerticalLine />
        <StyledSearchButtons>Dowolny tydzień</StyledSearchButtons>
        <StyledVerticalLine />
        <StyledSearchButtons> 
            <span>Dodaj gości</span>
            <StyledSearchIcon icon={faMagnifyingGlass} />   
        </StyledSearchButtons>
        
    </StyledSearch>
  )
}
