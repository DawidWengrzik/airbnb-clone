import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PlaceForm from '../../Components/PlaceForm'
import Spinner from '../../Components/Spinner'
import PlaceItem from '../../Components/PlaceItem'
import { getPlaces, reset } from '../../features/places/placeSlice'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { places, isLoading, isError, message } = useSelector(
    (state) => state.places
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/admin/login')
    }
    else{ 
      dispatch(getPlaces())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1> Welcome {user && user.name}</h1>
        <p>Goals Dashobard</p>
      </section>
      <PlaceForm />
      <section className='content'>
        {places.length > 0 ? 
          (<div className='goals'>
            {places.map((place) => (
              <PlaceItem key={place._id} place={place} />
            ))}
          </div>) : 
          (<h3>
            You have not set any goals
          </h3>)}
      </section>
    </>
  )
}

export default Dashboard