const express = require('express');
const router = express.Router();
const {getPlaces, setPlace, updatePlace, deletePlace} = require('../controllers/placeController')
const { protect } = require('../middleware/authMiddleware')

// getPlaces and postPlace route
router.route('/').get(protect, getPlaces).post(protect, setPlace);

// put and delete Place route
router.route('/:id').put(protect, updatePlace).delete(protect, deletePlace);

module.exports = router;