import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePlace } from '../features/places/placeSlice'

const PlaceItem = ({ place }) => {

    const dispatch = useDispatch()

    return (
        <div className='goal'>
            <div>{new Date(place.createdAt).toLocaleString('en-US')}</div>
            <h2>{place.name}</h2>
            <button onClick={() => dispatch(deletePlace(place._id))} className='close'>X</button>
        </div>
    )
}

export default PlaceItem