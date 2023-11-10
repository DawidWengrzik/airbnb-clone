import React, { useRef, useState, useLayoutEffect } from 'react'
import './placesslider.scss'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { CiSliderHorizontal } from 'react-icons/ci'

import { BsHouseDoor } from 'react-icons/bs'

import { UseScrollPosition } from '../../hooks/useScrollPosition';

  const PlacesSlider = () => {

  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [currentElement, setCurrentElement] = useState(0);
  const scrollPosition = UseScrollPosition();

  useLayoutEffect(() => {
    setSliderWidth(sliderRef.current.offsetWidth);
  }, []);

  const slide = (direction) => {
    setCurrentElement(currentElement + 6 * (100 * direction))
  }
  
  return (
    <div className={`places-container ${scrollPosition ? "shadow-bottom" : ""}`}>
        <div className='place-slider'>
          {currentElement <= -1 ? 
          <div className='btn-container chevron-left'>
            <button className='slider__btn ' onClick={() => slide(1)}>
              <span className="btn-icon"><HiChevronLeft /></span>
            </button>
          </div>: null}
            <ul className='slider-list' ref={sliderRef}>  
              <li className='slider-list__item list__item-active' style={{transform : `translateX(${currentElement}%)`}}>
                <BsHouseDoor className='icon' />
                <span className='place-name'>Pokoje prywatne</span>
              </li>
              {[...Array(29)].map(el => {
                return(
                  <li className='slider-list__item'  style={{transform : `translateX(${currentElement}px)`}} key={el}>
                    <BsHouseDoor className='icon' />
                    <span className='place-name'>Pokoje prywatne</span>
                  </li>
                )
              })}
            </ul>
            {Math.abs(currentElement) <= sliderWidth ? 
            <div className='btn-container chevron-right'>
              <button className='slider__btn ' onClick={() => slide(-1)}>
                <span className="btn-icon"><HiChevronRight /></span>
              </button>
            </div>:null}
          </div>
          
        <button className='places-filter-btn'>
          <span className='slider-icon'><CiSliderHorizontal /></span>
          <span className='filters-btn__span'>Filtry</span>
        </button>
    </div>
  )
}

export default PlacesSlider