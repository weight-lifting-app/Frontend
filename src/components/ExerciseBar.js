import React from 'react'
import ExerciseTab from './ExerciseTab'
import  './Exercise.css'


export default function ExerciseBar(props) {
    return (
        <div className="bg-gray-400 h-auto ex-bar">
            <div className="ex-tab flex justify-between">
                <h2 classNa="text-3xl">Exercises</h2>
                <button className="g-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"> + Add</button>
            </div>
            {props.exercises.map((exercise,i) => {
                if(exercise.user_id === Number(props.user_id)) {
                return <ExerciseTab key={exercise.id} index={i} exercise={exercise} selectExercise={props.selectExercise}/> 
                }} 
            )}
        </div>
    )
}


{/* deleteExercise={this.props.deleteExercise} updateExercise={this.props.updateExercise} */}