import React, { useState } from 'react'
import {HiOutlineGlobeAlt} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import AuthorizationPopup from '../AuthPopup/AuthorizationPopup';

const UserPanel = () => {

    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        {showModal && <AuthorizationPopup showModal={showModal} setShowModal={setShowModal}/>}
        <div className='user-panel'>
            <button className='user-panel__btn'>
                <span>Wynajmij swój dom na Airbnb</span>
            </button>
            <button className='user-panel__btn'>
                <span><HiOutlineGlobeAlt className='user-panel__btn--globe'/></span>
            </button>
            <button className='user-panel__btn' onClick={() => setIsDropdownActive(!isDropdownActive)}>
                <span className='user-panel__btn-hamburger'>
                    <span className='hamburger-inner'></span>
                </span>
                <span className='user-box'> 
                    <FaUser className='user-box__icon'/>
                </span>
                {isDropdownActive && 
                    (<div className='user-panel__dropdown'>
                        <a onClick={() => setShowModal(!showModal)}><span className='dropdown-span'>Zarejestruj się</span></a>
                        <a onClick={() => setShowModal(!showModal)}><span className='dropdown-span'>Zaloguj się</span></a>
                        <hr className='dropdown-separator'/>
                        <span className='dropdown-span'>Wynajmij swój dom na Airbnb</span>
                        <span className='dropdown-span'>Pomoc</span>
                    </div>)}
            </button>
        </div>
        </>
        
    )
}

export default UserPanel