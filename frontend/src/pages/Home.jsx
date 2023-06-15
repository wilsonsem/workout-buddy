import React from "react";
import { useEffect }  from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hook/useWorkoutsContext";


const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext()
    
    useEffect(() =>{
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const data = await response.json()

            if (response.ok){
                dispatch({ type:'SET_WORKOUTS', payload: data })
            }
        }

        fetchWorkouts()
    }, [])

    
    return (
        <div className="home">
            <div className="workouts">
                <h1>Workouts</h1>
                {workouts && workouts.map((workout) =>(
                    // <p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;