const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({
    name: String,
    owner: String,
    description: String,
    price: Number,
    photos: [String],
})

module.exports = mongoose.model('Place', placeSchema);