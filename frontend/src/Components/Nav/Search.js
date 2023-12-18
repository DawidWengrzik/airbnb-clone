import React from 'react'
import './Styles/navStyles.scss'
import {FiSearch} from 'react-icons/fi'

const Search = () => {
  return (
    <div className='search-bar'>
        <button className='search-bar__btn'>
            <span className='search-bar__btn__span'>Gdziekolwiek</span>
        </button>
        <button className='search-bar__btn'>
            <span className='search-bar__btn__span'>Dowolny termin</span>
        </button>
        <button className='search-bar__btn'>
            <span className='search-bar__btn__span'>Dodaj gości</span>
            <div className='search-bar__btn--loop' tabIndex={0}>
                <span className='search-bar__btn--loop__span'><FiSearch /></span>
            </div>
        </button>
    </div>
  )
}

export default Search