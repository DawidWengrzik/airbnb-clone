import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CardElement = ({ place }) => {

  const { name, description, price, photos} = place
  const [placePhoto, setPlacePhoto] = useState(0)

  const slide = (direction) => {
    if (Math.abs(placePhoto) !== photos.length) {
      setPlacePhoto(placePhoto + direction)
    }
    
  }

  return (
    <div className='card-container'>
      <div className='image-container'>
        <Link to={`/places/${place._id}`} className='image-Link'>
          {photos.map((photo, index) => {
              return (
                <img alt='Hotel photos' 
                className='hotel-image' 
                src={photos[index]} 
                key={index} 
                style={{'transform':`translateX(${(placePhoto)*100}%)`}}></img>
              )
            })}
        </Link>
        
        <div className='hotel-controls'> 
          <button className='heart-btn'><FaRegHeart className='heart-icon'/></button>
          <div className='controls__btns'>
            {placePhoto !== 0 && 
            <button className='set-image__btn prev' onClick={() => slide(1)}>
              <span className="btn-icon"><HiChevronLeft /></span>
            </button>}
            {Math.abs(placePhoto) !== photos.length - 1 &&
            <button className='set-image__btn next' onClick={() => slide(-1)}>
              <span className="btn-icon"><HiChevronRight /></span>
            </button>}
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
      <Link to={`/places/${place._id}`} className='info-container'>
        <div className='info-container__leftSide'>
          <span className='info-place-name'>{name}, Australia</span>          
          <span className='place-owner_info'>Pobyt u: Byron</span>
          <span className='place-date_info'>22-27 paź - Gospodarz prywatny</span>
          <span className='place-price'><span>{price ? price : 237} zł</span> noc</span>
        </div>
        <div className='place-rate'>
          <span className='place-rate__value'>
            <AiFillStar className='place-rate_star'/>4,92
          </span></div>
      </Link>
     
    </div>
    
  )
}

export default CardElement