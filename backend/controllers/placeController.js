const asyncHandler = require('express-async-handler')

const Place = require('../models/placeModel')
const User = require('../models/userModel')
// @desc Getting all Places from api
// @route GET /api/Places
// @access Private
const getPlaces = asyncHandler(async (req, res) => {
    const places = await Place.find();
    res.status(200).json(places)
})

// @desc Getting specific Place from api
// @route GET /api/Places/:id
// @access Private
const getSpecificPlace = asyncHandler(async (req, res) => {
    const place = await Place.findById(req.params.id);
    res.status(200).json(place)
})

// @desc Put the Place in db
// @route GET /api/Places
// @access Private
const setPlace = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const place = await Place.create({
        user: req.user.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        photos: req.body.photos
    })
    res.status(200).json(place)
})

// @desc Update Place with id
// @route GET /api/Places/:id
// @access Private
const updatePlace = asyncHandler(async (req, res) => {
    const place = await Place.findById(req.params.id)
    if(!place) {
        res.status(400)
        throw new Error('Place not found')
    }
    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    // !!!!!!!!!!!!!!!!!!NAPRAW!!!!!!!!!!!!!!!!!!!!!!
    if(place.user.toString() !== req.place.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedPlace)
})

// @desc Delete Place with id
// @route GET /api/Places/:id
// @access Private
const deletePlace = asyncHandler(async (req, res) => {
    const place = await Place.findById(req.params.id)
  
    if (!place) {
      res.status(400)
      throw new Error('Goal not found')
    }
  
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    // Make sure the logged in user matches the goal user
    if (place.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await place.deleteOne()
  
    res.status(200).json({ id: req.params.id })
  })

module.exports = {
    getPlaces,
    setPlace,
    updatePlace,
    getSpecificPlace,
    deletePlace
}