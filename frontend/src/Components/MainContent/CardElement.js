import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const CardElement = () => {
  return (
    <div className='card-container'>
        <div className='image-container'>
          <img alt='Hotel photos' class='hotel-image' src='https://meteor-turystyka.pl/images/base/33/32844/364830_40.jpg'></img>
          <div className='hotel-controls'> 
            <button className='heart-btn'><FaRegHeart className='heart-icon'/></button>
            <div className='controls__btns'>
              <button className='set-image__btn prev'>
                <span className="btn-icon"><HiChevronLeft /></span>
              </button>
              <button className='set-image__btn next'>
                <span className="btn-icon"><HiChevronRight /></span>
              </button>
            </div> 
            <div className='photo-slider'>
              <div className='slider-container'>
                <span className='slider-el__active'></span>
                <span className='slider-el'></span>
                <span className='slider-el'></span>
                <span className='slider-el'></span>
                <span className='slider-el last'></span>
              </div>
            </div>           
          </div>    
        </div>
        <div className='info-container'>
          <span className='info-place-name'>Surry Hills, Australia</span>
          <span className='place-rate'><AiFillStar className='place-rate_star'/>4,92</span>
          <span className='place-owner_info'>Pobyt u: Byron</span>
          <span className='place-date_info'>22-27 paź - Gospodarz prywatny</span>
          <span className='place-price'><span>483 zł</span> noc</span>
        </div>
      </div>
  )
}

export default CardElement