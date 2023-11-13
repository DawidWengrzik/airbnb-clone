import React, { useEffect } from 'react'
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {GiSportMedal} from 'react-icons/gi'
import { FiShare } from 'react-icons/fi'
import './placeDetails.scss'

const PlaceDetailsContent = ({ specificPlace }) => {

  const { name, description, price, photos} = specificPlace

  return (
    <div className='place-info__header'>
      <h2>{name} </h2>
      <div>
        <ul className='place-info__list'>
          <li className='info-list__item'>
            <span className='info-item__name'>
              <AiFillStar /> 5,0
            </span>
          </li>
          <li className='info-list__item'>
            <span className='info-item__name'>11 recenzji</span>
          </li>
          <li className='info-list__item'>
            <span className='info-item__name'>
              <GiSportMedal /> Superhost
            </span>
          </li>
          <li className='info-list__item'>
            <span className='info-item__name'>
            </span>
          </li>
        </ul>
      </div>
      
      <div>
        <button><FiShare /> Udostępnij</button>
        <button><AiOutlineHeart /> Polub</button>
      </div>
    </div>
  )
}

export default PlaceDetailsContent