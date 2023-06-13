import React from 'react'
import {HiOutlineGlobeAlt} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'

const UserPanel = () => {
  return (
    <div className='user-panel'>
        <button className='user-panel__btn'>
            <span>Wynajmij swój dom na Airbnb</span>
        </button>
        <button className='user-panel__btn'>
            <span><HiOutlineGlobeAlt className='user-panel__btn--globe'/></span>
        </button>
        <button className='user-panel__btn'>
            <span className='user-panel__btn-hamburger'>
                <span className='hamburger-inner'></span>
            </span>
            <span className='user-box'> 
                <FaUser className='user-box__icon'/>
            </span>
        </button>
    </div>
  )
}

export default UserPanel