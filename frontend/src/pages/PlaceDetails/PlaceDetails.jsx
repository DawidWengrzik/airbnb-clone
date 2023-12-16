import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import NavBar from '../../Components/Nav/NavBar'
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificPlace, reset } from '../../features/places/placeSlice';
import PlaceDetailsContent from '../../Components/PlaceContent/PlaceDetailsContent'
import Spinner from '../../Components/Spinner';

const PlaceDetails = () => {

    const placeId = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { chosenPlace, isLoading, isError, message } = useSelector(
        (state) => state.places
    );

    useEffect(() => {
      dispatch(getSpecificPlace(placeId.id))
      
      return () => {
        dispatch(reset())
      }
    }, [navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <NavBar specificStyles='nav-sections-container__places'/>
      <div className='place-info__container'>        
        <PlaceDetailsContent className="place-details__content" specificPlace={chosenPlace}/>
      </div>       
    </>
  )
}

export default PlaceDetails