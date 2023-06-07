const asyncHandler = require('express-async-handler')

const Place = require('../models/placeModel')
// @desc Getting all Places from api
// @route GET /api/Places
// @access Private
const getPlaces = asyncHandler(async (req, res) => {
    const places = await Place.find();
    res.status(200).json(places)
})

// @desc Put the Place in db
// @route GET /api/Places
// @access Private
const setPlace = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const place = await Place.create({
        name: req.body.text
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
    const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedPlace)
})

// @desc Delete Place with id
// @route GET /api/Places/:id
// @access Private
const deletePlace = asyncHandler(async (req, res) => {
    const place = await Place.findById(req.params.id)
    if(!place) {
        res.status(400)
        throw new Error('Place not found')
    }

    // Why remove doesn't work???
    const deletedPlace = await Place.findByIdAndRemove(req.params.id, {id: req.params.id})
    res.status(200).json(deletedPlace)
})

module.exports = {
    getPlaces,
    setPlace,
    updatePlace,
    deletePlace
}