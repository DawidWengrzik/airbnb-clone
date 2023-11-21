import React from 'react'

const PlaceCollage = ({ specificPlace }) => {

  const { name, description, price, photos} = specificPlace
  
  return (
    <div className='place-collage'>
        <h1 className='place-name'></h1>
        <main className='collage-container'>
            { photos?.map(singlePhoto => 
              (<button className='photo-wrapper__button'>
                <img src={singlePhoto} className='collageSinglePhoto'></img>
              </button>)) }
        </main>
    </div>
  )
}

export default PlaceCollage