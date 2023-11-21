import React, { useEffect } from 'react'
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {GiSportMedal} from 'react-icons/gi'
import { FiShare } from 'react-icons/fi'
import './placeDetails.scss'
import PlaceCollage from './placeCollage'

const PlaceDetailsContent = ({ specificPlace }) => {

  const { name, description, price, photos} = specificPlace

  return (
    <div className='place-info'>
      <div className='place-info__header'>
        <div className='place-header__head-info'>
          <h2 className='place-info__name'>{name}</h2>
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
            </ul>
          </div>
        </div>
        <div class="place-info__btns">
          <button className='header-btn__share'><FiShare className='header-btn__icon'/> Udostępnij</button>
          <button className='header-btn__like'><AiOutlineHeart className='header-btn__icon'/> Polub</button>
        </div>  
      </div>
      <PlaceCollage className="place-details__collage" specificPlace={specificPlace}/>
      <div className='place-details__container'>
        <div className='place-details'>
          <h2 className='place-details__header'>{description}</h2>
          <ul className='place-details__list'>
            <li className='details-list__item'>
              <span className='details-item__name'>10 gości</span>
            </li>
            <li className='details-list__item'>
              <span className='details-item__name'>4 sypialnie</span>
            </li>
            <li className='details-list__item'>
              <span className='details-item__name'>
                10 łóżek
              </span>
            </li>
            <li className='details-list__item'>
              <span className='details-item__name'>
                4 łazienki
              </span>
            </li>
          </ul>
        </div>
        <div className='place-details__photo--container'>
          <img className='place-details__photo' alt='user-photo' src='https://www.shutterstock.com/image-photo/close-photo-charming-guy-entrepreneur-260nw-1531460651.jpg'></img>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailsContent