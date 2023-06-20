import './authPopupStyle.scss'
import { GrClose } from 'react-icons/gr'
import { BiChevronDown } from 'react-icons/bi'

const AuthorizationPopup = () => {
  return (
    <div className="popup-container">
        <div className="popup-form">
            <header className="form-header">
                <div className='header-close'> 
                  <button className='header-close__btn'><GrClose /></button>
                </div>
                <span>Zaloguj się lub zarejestruj</span>
            </header>
            <hr className='separator' /> 
            <div className="form-content">
              <div className='form-content__header'>
                <h3>Witaj w Airbnb</h3>
              </div>
                
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
                
                <span className='form-login__input'></span>
              </div>
              <div>
                <span className='form-login__info'>Zadzwonimy lub wyślemy SMS-a, aby potwierdzić Twój numer. 
                  Obowiązują standardowe opłaty za wysyłanie wiadomości i transmisję danych.
                  &nbsp;<a href="https://www.airbnb.pl/help/article/2855" target="_blank" className='info-highlight'>Polityka Prywatności</a></span>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default AuthorizationPopup