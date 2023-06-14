const express = require ('express')
const workout = require ('../models/workout')
const controllers =require('../controllers/workout')
const router = express.Router()

// get all workout
router.get('/', controllers.getAllWorkouts)
// (req, res) => {
//     res.json({mssg:"Get all workout"})
// })

// get a singe workout
router.get('/:id', controllers.getSingleWorkout )
// (req, res) => {
//     res.json({mssg:"Get a single workout "})
// })

// post a new workout
router.post('/', controllers.addWorkout)

// delete a workout
router.delete('/:id', controllers.deleteWorkout)
// (req, res) => {
//     res.json({mssg:"delete a workout"})
// })

// delete a workout
router.patch('/:id', controllers.updateWorkout)
// (req, res) => {
//     res.json({mssg:"UPDATE a workout"})
// })

module.exports = router
