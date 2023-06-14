const mongoose = require('mongoose')


//defining the database schema

const workoutSchema = new mongoose.Schema({
    title: {type:String, required:true},
    reps: {type:Number, required:true},
    load: {type:Number, required:true}
}, {timestamps: true})


// creating a model
Workout = mongoose.model('Workout', workoutSchema)


module.exports = Workout