const workout = require ('../models/workout')
const mongoose = require('mongoose')



//get all workout
exports.getAllWorkouts = async (req, res) =>{

    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
    console.log(workouts)
}


//get a single workout
exports.getSingleWorkout = async(req, res) =>{
    const{ id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "No such workout"})
    }
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({err: 'No such workout'})
    }
    res.status(200).json(workout)
}



//add a new workout
exports.addWorkout = async(req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout
exports.deleteWorkout = async(req, res) =>{
    const{ id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "No such workout"})
    }
    const workout = await Workout.findOneAndDelete(_id)
    if(!workout){
        return res.status(400).json({err: "No such workout"})
    }
    res.status(200).json(workout)
}


//update a workout
exports.updateWorkout = async(req, res) =>{
    const{ id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "No such workout"})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})
    if(!workout){
        return res.status(400).json({err: "No such workout"})
    }
    res.status(200).json(workout)
}


module.exports = exports