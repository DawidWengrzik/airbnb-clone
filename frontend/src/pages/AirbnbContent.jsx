import NavBar from '../Components/Nav/NavBar'
import PlacesSlider from '../Components/PlacesSlider/PlacesSlider';
import MainContent from '../Components/MainContent/MainContent';
import Spinner from '../Components/Spinner';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPlaces, reset } from '../features/places/placeSlice';

const AirbnbContent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { places, isLoading, isError, message } = useSelector(
    (state) => state.places
  )

  useEffect(() => {
    dispatch(getPlaces())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="App">
      <NavBar />
      <PlacesSlider />
      <MainContent />
    </div>
  )
}

export default AirbnbContent