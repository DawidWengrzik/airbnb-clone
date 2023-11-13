import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import NavBar from '../../Components/Nav/NavBar'
import { useSelector, useDispatch } from 'react-redux';
import { getPlaces, getSpecificPlace, reset } from '../../features/places/placeSlice';
import PlaceDetailsContent from '../../Components/PlaceContent/PlaceDetailsContent'
import PlaceCollage from '../../Components/PlaceContent/placeCollage'
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
      <NavBar specificStyles='nav-sections-container__places' />
      <div className='place-info__container'>        
        <PlaceDetailsContent specificPlace={chosenPlace}/>
        <PlaceCollage specificPlace={chosenPlace}/>
      </div>       
    </>
  )
}

export default PlaceDetails