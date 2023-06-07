const asyncHandler = require('express-async-handler')

// @desc Getting all goals from api
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler((req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

// @desc Put the goal in db
// @route GET /api/goals
// @access Private
const setGoal = asyncHandler((req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
})

// @desc Update goal with id
// @route GET /api/goals/:id
// @access Private
const updateGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc Delete goal with id
// @route GET /api/goals/:id
// @access Private
const deleteGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}