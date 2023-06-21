import './authPopupStyle.scss'
import { GrClose } from 'react-icons/gr'
import { AiFillFacebook, AiFillApple, AiOutlineMobile } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc';
import { FiMail } from 'react-icons/fi'
import { useState } from 'react';

const AuthorizationPopup = ({ showModal, setShowModal }) => {

  const [modalType, setModalType] = useState('phone');

  if (showModal) {
    return (
      <div className="popup-container">
          <div className="popup-form">
              <header className="form-header">
                  <div className='header-close'> 
                    <button className='header-close__btn' onClick={() => setShowModal(!showModal)}><GrClose /></button>
                  </div>
                  <span>Zaloguj się lub zarejestruj</span>
              </header>
              <hr className='separator' /> 
              <div className="form-content">
                <div className='form-content__header'>
                  <h3>Witaj w Airbnb</h3>
                </div>
                { 
                // Modal inputs for phone number login
                (modalType === 'phone') && (
                  <div className='form-data'>
                  <div id='country-select' className='form-login__select'> 
                    <div className='select-label'>
                      <label for='country-select'>Kraj/region</label>
                    </div>
                    <select>
                      <option value="0">Polska (+48)</option>
                    </select>
                    
                    <div className='arrow-down'>
                      <BiChevronDown className='arrow-icon'/>
                    </div>
                  </div>
                  
                  <div className='form-login__input'>
                    <div className='login-number'>
                      <span>+48</span>
                    </div>
                    <input type="text" placeholder='Numer telefonu' className='login-input'/>
                  </div>
                </div>
                ) 
                // Modal inputs for email login
                || (modalType === 'email') && (
                  <div className='form-data'>
                    <div className='form-login__input'>
                      <div className='login-number'>
                        <span>Adres email</span>
                      </div>
                      <input type="text" placeholder='Adres email' className='login-input'/>
                    </div>
                  </div>)
                }
                <div className='from-login__container'>
                  <span className='form-login__info'>Zadzwonimy lub wyślemy SMS-a, aby potwierdzić Twój numer. 
                    Obowiązują standardowe opłaty za wysyłanie wiadomości i transmisję danych.
                    &nbsp;<a href="https://www.airbnb.pl/help/article/2855" target="_blank" className='info-highlight'>Polityka Prywatności</a></span>
                </div>
                <button className='form-button'>
                  <span>Dalej</span>
                </button>
                <div className='content-separator'>lub</div>
                <div className='login-options'>
                  <div className='login-option'>
                    <AiFillFacebook className='login-option__icon' style={{fill: "#4267B2"}}/>
                    <span>Kontynuuj, używając Facebook</span>
                  </div>
                  <div className='login-option'>
                    <FcGoogle className='login-option__icon' />
                    <span>Kontynuuj, używając Google</span>
                  </div>
                  <div className='login-option'>
                    <AiFillApple className='login-option__icon' />
                    <span>Kontynuuj przez Apple</span>
                  </div>
                  {
                    (modalType === 'phone') && (
                      <div className='login-option' onClick={() => setModalType('email')}>
                        <FiMail className='login-option__icon' />
                        <span>Użyj adresu email</span>
                      </div> 
                    )
                    || (modalType === 'email') && (
                      <div className='login-option' onClick={() => setModalType('phone')}>
                        <AiOutlineMobile className='login-option__icon' />
                        <span>Użyj numeru telefonu</span>
                      </div>)
                  }
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default AuthorizationPopup