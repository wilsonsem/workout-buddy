import React, { useState } from 'react'

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

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
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setSuccess("Added sucessfully")
            console.log("Successfully added", json)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new workout</h3>
      <div>
      <label >Excersise title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
      <label>Load (kg):</label>
      <input type="number" onChange={(e) => setLoad(e.target.value)} value={load}/>
      </div>
      <div>
      <label>Reps</label>
      <input type="number" onChange={(e) => setReps(e.target.value)} value={reps}/>
        </div>  
      <button type='submit'>Add Workout</button> 
      { error && <div>{error}</div>}
      { success && <div>{success}</div>}
       </form>
  )
}

export default WorkoutForm
