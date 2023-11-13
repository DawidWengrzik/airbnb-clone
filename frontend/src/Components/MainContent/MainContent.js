import React from 'react'
import './mainContentStyle.scss'
import CardElement from './CardElement';

const MainContent = ({ places }) => {
  return (
    <div className='main-content__container'>
      {places.map(place => <CardElement key={place._id} place={place} /> )}
    </div>
  )
}

export default MainContent