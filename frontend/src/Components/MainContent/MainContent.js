import React from 'react'
import './mainContentStyle.scss'
import CardElement from './CardElement';

const MainContent = ({ places }) => {
  return (
    <div className='main-content__container'>
      {places.map(place => <CardElement place={place} key={place._id}/> )}
      
    </div>
  )
}

export default MainContent