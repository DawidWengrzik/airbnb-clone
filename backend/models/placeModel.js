const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: String,
    description: String,
    price: Number,
    photos: [String],
})

module.exports = mongoose.model('Place', placeSchema);