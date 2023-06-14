import React from 'react'

const WorkoutDetails = ({ workout }) => {
  return (
    <div>
      <h4>{workout.title}</h4>
      <p>Load(Kg): {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails
