import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlace } from '../features/places/placeSlice'

const PlaceForm = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [price, setPrice] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createPlace({name, description, photos, price}))
    setName('')
  }

  return (
    <section className='form'> 
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Place</label>
          <input 
            type='text' 
            name='name' 
            id='name' 
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
          <input 
            type='text' 
            name='description' 
            id='description' 
            placeholder='Place description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}></input>
          <input 
            type='text' 
            name='photos' 
            id='photos' 
            placeholder='Photos urls'
            value={photos}
            onChange={(e) => setPhotos(e.target.value)}></input>
          <input 
            type='number' 
            name='price' 
            id='price' 
            placeholder='Place price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}></input>
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