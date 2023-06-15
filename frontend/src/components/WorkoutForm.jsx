import React, { useState } from 'react'
import { useWorkoutsContext } from "../hook/useWorkoutsContext";



const WorkoutForm = () => {
    
  const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e) => {

        e.preventDefault()
        const workout = {title,load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body : JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        const json = await response.json();
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            dispatch({type:'CREATE_WORKOUT', payload:json})
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new workout</h3>
      <div>
      <label >Excersise title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
      className={emptyFields.includes('title') ? 'error' : ''} />
      </div>
      <div>
      <label>Load (kg):</label>
      <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} 
      className={emptyFields.includes('load') ? 'error' : ''} />
      </div>
      <div>
      <label>Reps</label>
      <input type="number" onChange={(e) => setReps(e.target.value)} value={reps}
      className={emptyFields.includes('reps') ? 'error' : ''} />
        </div>  
      <button type='submit'>Add Workout</button> 
      { error && <div>{error}</div>}
       </form>
  )
}

export default WorkoutForm
