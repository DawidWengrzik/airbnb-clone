import React, { useEffect } from 'react'
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {GiSportMedal, GiDesk} from 'react-icons/gi'
import { FiShare } from 'react-icons/fi'
import { HiChevronRight } from 'react-icons/hi';
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
          <span className='translate-info'>Niektóre informacje zostały przetłumaczone automatycznie. <a className='interaction-text' tabindex="0">Pokaż oryginał</a></span>
          <p className='description-text'>DOMKI JANOSIK zapraszają Was do góralskiego domku z kominkiem,który stoi na ogrodzonej działce nad potokiem.Domek jest wygodnie umeblowany i wyposażony. Ma pralkę i zmywarkę. Ma duży taras. Dla dzieci mini plac zabaw,przyjmujemy z psami.Jest to świetna opcja dla rodzin z dziećmi i osób,które chcą chodzić po górach,pojeździć na rowerze,nartach.Łopuszna stanowi świetną bazę wypadową dla atrakcji górskich.
            Uwaga! Mam też w ofercie dwa inne Domki Janosik : Janosik 2 Komfort i Janosik 
          </p>
          <a className='interaction-text' tabindex="0">Pokaż więcej
            <HiChevronRight></HiChevronRight>
          </a>
          <hr className='place-details__ruler'></hr>
        </div>
        <div className='isolated-section'>
          <div className='bedrooms-seciton__header'>
            <h2 className='place-info__name'>Gdzie będziesz spać</h2>
            <div className='bedrooms-pagination'>1/2</div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailsContent