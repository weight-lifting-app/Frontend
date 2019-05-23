import React from 'react'
import './Exercise.css'
export default function ExerciseTab(props) {
    return (
        <p className={props.index%2===0 ?"bg-gray-500 ex-tab ex-body":"bg-gray-300 ex-tab ex-body"}
        id={props.exercise.id}
         onClick={(e)=>props.selectExercise(e)}
         >{props.exercise.name}</p>
    )
}
