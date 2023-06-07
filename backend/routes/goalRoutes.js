const express = require('express');
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

// getGoals and postGoal route
router.route('/').get(getGoals).post(setGoal);

// put and delete goal route
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;