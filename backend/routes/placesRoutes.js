const express = require('express');
const router = express.Router();
const {getPlaces, setPlace, updatePlace, deletePlace} = require('../controllers/placeController')

// getPlaces and postPlace route
router.route('/').get(getPlaces).post(setPlace);

// put and delete Place route
router.route('/:id').put(updatePlace).delete(deletePlace);

module.exports = router;