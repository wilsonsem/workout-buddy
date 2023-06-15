import React from 'react'
import { useWorkoutsContext } from '../hook/useWorkoutsContext'


const WorkoutDetails = ({ workout }) => {

  const dispatch = useWorkoutsContext()
    const handleDelete = async() => {

          const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE',
          })
          const json = await response.json()
          if (Response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
            console.log("Deleted workout")
          }}

  return (
      <div>
        <h4>{workout.title}</h4>
        <p>Load(Kg): {workout.load}</p>
        <p>Reps: {workout.reps}</p>
        <p>{workout.createdAt}</p>
        <button onClick={handleDelete} style={{color:"red"}} >Delete</button>
      </div>
  )
}

export default WorkoutDetails
