import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlace } from '../features/places/placeSlice'

const PlaceForm = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [photos, setPhotos] = useState([]);
  const [price, setPrice] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createPlace({name, description, photos, price}))
    setName('')
  }

  const addPhoto = (photo) => {
    setPhotos([...photos, photo])
    setPhoto('')
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
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}></input>
          <button onClick={() => addPhoto(photo)} type='button'>Add photo</button>
          <div className='form__photos-container'>
            {photos.map(photo => (
              <img key={photo} src={photo} style={{width: '100px', height: '100px'}}></img>
            ))}
          </div>
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