import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPlace } from '../features/places/placeSlice'

const PlaceForm = () => {

  const [name, setName] = useState('')

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createPlace({name}))
    setName('')
  }

  return (
    <section className='form'> 
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Place</label>
          <input 
            type='text' 
            name='text' 
            id='text' 
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
        </div>
          <div className='form-group'>
            <button className='btn btn-block'
            type='submit'>
              Add Place 
            </button>
          </div>
      </form>
    </section>
  )
}

export default PlaceForm