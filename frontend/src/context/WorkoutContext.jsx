import React from 'react'
import { createContext } from 'react'

export const workoutsContext = createContext()

export const workoutReducer = (state, action) => {
    switch (action.type) {

        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }

        case 'CREATE_WORKOUTS':
            return {
                workouts: [action.payload, ...state.workouts]
            }
    
        default:
            break;
    }
}

export const WorkoutsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(workoutReducer, {workouts : null})



    return (
    <WorkoutsContextProvider value={{ state, dispatch }}>
       { children }
    </WorkoutsContextProvider>
  )
}

// export default WorkoutContext
