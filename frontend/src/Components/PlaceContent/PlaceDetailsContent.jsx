import React, { useEffect, useState } from 'react'
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {GiSportMedal, GiDesk} from 'react-icons/gi'
import { FiShare } from 'react-icons/fi'
import { HiChevronRight } from 'react-icons/hi';
import { TbKeyboard } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { TfiSpray } from "react-icons/tfi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { CiChat2 } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { RiPriceTagLine } from "react-icons/ri";

import leavesLeft from '../../assets/images/leaves-left.png';
import leavesRight from '../../assets/images/leaves-right.png';

import PlaceCollage from './placeCollage'
import ArrowButton from '../ArrowButton';
import Calendar from 'react-calendar';

import './placeDetails.scss'
import './customCalendar.scss'

const PlaceDetailsContent = ({ specificPlace }) => {

  const { name, description, price, photos} = specificPlace
  const [selectedRange, setSelectedRange] = useState('');
  const date = new Date();  
  const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  date.setMonth(date.getMonth() +1); 

  const handleDayClick = (date) => {
    setSelectedRange(previousRange => {
      console.log(previousRange, '- previoys')
      if ( !previousRange ) {
        return date
      }
      if ( previousRange instanceof Date ) {
        return [selectedRange, date].sort(function(firstDate,secondDate){return firstDate.getTime() - secondDate.getTime()});
      }
      return ''
    })
  }

  const tileClassName = ({ date, view }) => {
    if (date < Date.now()) return 'past-days'
    return '';
  };

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
        <div className="place-info__btns">
          <button className='header-btn__share'><FiShare className='header-btn__icon'/> Udostępnij</button>
          <button className='header-btn__like'><AiOutlineHeart className='header-btn__icon'/> Polub</button>
        </div>  
      </div>
      <PlaceCollage className="place-details__collage" specificPlace={specificPlace}/>
        
      <div className='place-details'>
        <div className='place-details__container'>
          <div className='place-details_header-container'>
            <div className='place-details__short-description'>
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
            <hr className='place-details__ruler'></hr>
          </div>
          <div className='place-details__facilities'>
            <ul className='facilities-list'>
              <li className='facilities-list__item'>
                <GiDesk className='facilities-item__icon'></GiDesk>
                <div className='facilities-item__description'>
                  <h3 className='facilities-item__header'>Miejsce do pracy</h3>
                  <span className='facilities-item__span'>Część wspólna z Wi-Fi odpowiednim do pracy.</span>
                </div>
              </li>
              <li className='facilities-list__item'>
                <GiDesk className='facilities-item__icon'></GiDesk>
                <div className='facilities-item__description'>
                  <h3 className='facilities-item__header'>Miejsce do pracy</h3>
                  <span className='facilities-item__span'>Część wspólna z Wi-Fi odpowiednim do pracy.</span>
                </div>
              </li>
              <li className='facilities-list__item'>
                <GiDesk className='facilities-item__icon'></GiDesk>
                <div className='facilities-item__description'>
                  <h3 className='facilities-item__header'>Miejsce do pracy</h3>
                  <span className='facilities-item__span'>Część wspólna z Wi-Fi odpowiednim do pracy.</span>
                </div>
              </li>
            </ul>
            <hr className='place-details__ruler'></hr>
          </div>
          <div className='isolated-section'>
            <span className='translate-info'>Niektóre informacje zostały przetłumaczone automatycznie. <a className='interaction-text' tabIndex="0">Pokaż oryginał</a></span>
            <p className='description-text'>DOMKI JANOSIK zapraszają Was do góralskiego domku z kominkiem,który stoi na ogrodzonej działce nad potokiem.Domek jest wygodnie umeblowany i wyposażony. Ma pralkę i zmywarkę. Ma duży taras. Dla dzieci mini plac zabaw,przyjmujemy z psami.Jest to świetna opcja dla rodzin z dziećmi i osób,które chcą chodzić po górach,pojeździć na rowerze,nartach.Łopuszna stanowi świetną bazę wypadową dla atrakcji górskich.
              Uwaga! Mam też w ofercie dwa inne Domki Janosik : Janosik 2 Komfort i Janosik 
            </p>
            <a className='interaction-text' tabIndex="0">Pokaż więcej
              <HiChevronRight></HiChevronRight>
            </a>
            <hr className='place-details__ruler'></hr>
          </div>
          <div className='isolated-section bedroom-section'>
            <div className='bedrooms-section__header'>
              <h2 className='place-info__name'>Gdzie będziesz spać</h2>
              <div className='bedrooms-pagination'>
                <span>1/2</span>
              
                <ArrowButton classes="set-image__btn bedroom__btn-left" direction={1} />
                <ArrowButton classes="set-image__btn bedroom__btn-right" direction={-1} />
              </div>
            </div>
            <div className='bedrooms-section__photos'>
              <div className='bedroom__photos-item'>
                <img alt='bedrom photo' className='bedroom__photo' src='https://img.forte-meble.pl/9311-large_default/zestaw-sypialnia-chalet.jpg'></img>
                <div className='bedroom__head-text'>
                  <span className='bedroom__label'>Sypialnia 1</span>
                  <span className='bedroom__subLabel'>2 pojedyncze łóżka</span>
                </div>
              </div>
              <div className='bedroom__photos-item'>
                <img alt='bedrom photo' className='bedroom__photo' src='https://img.forte-meble.pl/9311-large_default/zestaw-sypialnia-chalet.jpg'></img>
                <div className='bedroom__head-text'>
                  <span className='bedroom__label'>Sypialnia 2</span>
                  <span className='bedroom__subLabel'>2 pojedyncze łóżka</span>
                </div>
              </div>
            </div>
            <hr className='place-details__ruler'></hr>
          </div>
          <div className='isolated-section specific-section'>
            <div className='equipment-section'>
              <h2 className='section-header'>Co znajdziesz w tym miejscu</h2>
              <div className='equipment-items__container'>
                {[...Array(10)].map(el => (
                  <div className='equipment-item'>
                    <div></div>
                    <GiDesk className='equipment-item__icon'></GiDesk>       
                    <span>Widok na jezioro</span>             
                  </div>
                ))}
                <button className='show-equipment__button'>
                  <span className='equipment-button__span'>Pokaż wszystkie udogodnienia (51)</span>
                </button>
              </div>
              <hr className='place-details__ruler'></hr>
            </div>          
          </div>
          <div className='isolated-section specific-section'>
            <div className='calendar-section'>
              <h2 className='section-header'>Wybierz datę wymeldowania</h2>
              <div className='calendar-container'>
                <div className='calendar-item'>
                  <Calendar 
                    calendarType='gregory' 
                    showNeighboringMonth={false}
                    tileClassName={tileClassName} 
                    onClickDay={handleDayClick}
                    value={selectedRange}
                    selectRange={true} />
                </div>
                <div className='calendar-item'>
                  <Calendar 
                    calendarType='gregory' 
                    showNeighboringMonth={false}
                    tileClassName={tileClassName} 
                    onClickDay={handleDayClick}
                    value={selectedRange}
                    defaultActiveStartDate={date}
                    selectRange={true} />
                </div>
              </div>              
            </div>
            <div className='calendar-footer'>
              <button className='calendar-footer__btn'>
                <TbKeyboard className='calendar-footer__icon'></TbKeyboard >
              </button>
              <button className='calendar-footer__btn'>Wyczyść daty</button>
            </div>
          </div>
        </div>
        <div className='place-details__reservation'>
          <div className='reservation-sticky'>
            <div className='reservation-wrapper'>
              <div className='price-header'>
                <span className='price-span'>268&nbsp;zł</span>
                <span className='price-span'>&nbsp;221&nbsp;zł&nbsp;</span>
                <span className='price-span'>noc</span>
              </div>
              <div className='reservation-panel'>
                <button className='reservation-btn__wrapper'>
                  <span className='reservation-first-panel'>
                    <span className='first-panel__left'> 
                      <span className='reservation-checkin__span'>Zameldowanie</span>
                      <span className='reservation-checkin__date--span'>{today}</span>
                    </span>  
                    <span className='first-panel__right'> 
                      <span className='reservation-checkin__span'>Wymeldowanie</span>
                      <span className='reservation-checkin__date--span'>{today}</span>
                    </span>                 
                  </span>
                </button>       
                <button className='reservation-btn__wrapper'>
                  <span className='reservation-second-panel'>
                    <span className='reservation-checkin__span'>Goście</span>
                    <span className='reservation-checkin__date--span'>1 gość</span>
                  </span>
                    <span className='dropdown-icon__wrapper'>
                      <RiArrowDropDownLine />
                    </span>
                </button>       
              </div>
              <button className='confirm-reservation__btn'>
                <span className='confirm-reservation__span'>Rezerwuj</span>
              </button>
              <div className='price-info__el'>
                <span className='price-info__span'>Płatność nie zostanie jeszcze naliczona</span>
              </div>
              <div className='price-elements__container'>
                <div className='price-el'>
                  <span className='price-el__left'>1 982 zł x 5 dni</span>
                  <span className='price-el__right'>9 910 zł</span>
                </div>
                <div className='price-el'>
                  <span className='price-el__left'>Opłata za sprzątanie</span>
                  <span className='price-el__right'>517 zł</span>
                </div>
                <div className='price-el'>
                  <span className='price-el__left'>Opłata serwisowa Airbnb</span>
                  <span className='price-el__right'>990 zł</span>
                </div>
                <hr className='place-details__ruler'></hr> 
              </div>
              <div className='price-el__summary'>
                <span className='price-el__left'>Łącznie</span>
                <span className='price-el__right'>9 910 zł</span>
              </div>
            </div>
            
            <div className='reservation-wrapper'>
              <div className='availability-wrapper'>
                <div className='badge-container'>
                  <IoDiamondOutline />
                </div>
                <div className='availability-info'>
                  <span className='availability-info__header'>To rzadkość</span>
                  <span className='availability-info__description'>Miejsce, które oferuje Ada, jest zazwyczaj w całości zarezerwowane.</span>
                </div>
              </div>
            </div>
            <div className='report-container'>
              <span className='report-flag'>
                <IoFlag  className='report-flag__icon'/>
              </span>
              <a className='report-link'>Zgłoś tę ofertę</a>
            </div>
          </div>
        </div>
        <hr className='place-details__ruler'></hr>
      </div>  
      
      <div className='full-size__section'>
        <div className='score-container'>
          <img src={leavesLeft} className='leaves-img'></img>
          <div>
            <span className='score-header'>5,0</span>
          </div>
          <img src={leavesRight} className='leaves-img'></img>
        </div>    
        <span className='score-header__span'>Wybór gości</span>    
        <p className='score-header__description'>Jeden z najbardziej lubianych domów na Airbnb na podstawie ocen i recenzji od gości oraz wiarygodności gospodarza</p>
        <div className='score-parts__container'>
          <ul className='score-parts__list'>
            <li className='score-parts__list--element'>
              <span className='score-element__header'>Ocena ogólna</span>
              <li className='score-element__content'>
                  <li className='score-bar__element'>
                    <span className='score-number'>5</span><div className='score-progressbar'></div>
                  </li>
                  <li className='score-bar__element'>
                    <span className='score-number'>4</span><div className='score-progressbar'></div>
                  </li>
                  <li className='score-bar__element'>
                    <span className='score-number'>3</span><div className='score-progressbar'></div>
                  </li>
                  <li className='score-bar__element'>
                    <span className='score-number'>2</span><div className='score-progressbar'></div>
                  </li>
                  <li className='score-bar__element'>
                    <span className='score-number'>1</span><div className='score-progressbar'></div>
                  </li>
              </li>
            </li>
            <li className='score-parts__list--element'>
              <div className='score-element__header--container'>
                <span className='score-element__header'>Czystość</span>
                <span className='score-element__partial--score'>4,8</span>
              </div>
              <div className='score-element__content content-icon'><TfiSpray className='score-element__icon'/></div>
            </li>
            <li className='score-parts__list--element'>
              <div className='score-element__header--container'>
                <span className='score-element__header'>Zgodność z opisem</span>
                <span className='score-element__partial--score'>5,0</span></div>
              <div className='score-element__content content-icon'><FaRegCheckCircle className='score-element__icon'/></div>
            </li>
            <li className='score-parts__list--element'>
              <div className='score-element__header--container'>
                <span className='score-element__header'>Zameldowanie</span>
                <span className='score-element__partial--score'>4,9</span>
              </div>
              <div className='score-element__content content-icon'><FaKey className='score-element__icon score-element_keyIcon' style = {{transform: 'rotateY(180deg)' }}/></div>
            </li>
            <li className='score-parts__list--element'>
              <div className='score-element__header--container'>
                <span className='score-element__header'>Komunikacja</span>
                <span className='score-element__partial--score'>4,9</span>
              </div>
              <div className='score-element__content content-icon'><CiChat2 className='score-element__icon'/></div>
            </li>
            <li className='score-parts__list--element'>
              <div className='score-element__header--container'>
                <span className='score-element__header'>Lokalizacja</span>
                <span className='score-element__partial--score'>5,0</span>
              </div>
              <div className='score-element__content content-icon'><CiMap className='score-element__icon'/></div>
            </li>
            <li className='score-parts__list--element'>
              <div className='score-element__header--container'>
                <span className='score-element__header'>Wartość/cena</span>
                <span className='score-element__partial--score'>4,8</span>
              </div>
              <div className='score-element__content content-icon'><RiPriceTagLine className='score-element__icon score-element_keyIcon' style = {{transform: 'rotateY(30deg)' }}/></div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div style={{height: '4000px'}}></div> */}
    </div>
  )
}

export default PlaceDetailsContent