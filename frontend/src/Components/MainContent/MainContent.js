import React from 'react'
import './mainContentStyle.scss'
import CardElement from './CardElement';

const MainContent = () => {
  return (
    <div className='main-content__container'>
      {[...Array(29)].map(el => <CardElement /> )}
      
    </div>
  )
}

export default MainContent