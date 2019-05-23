import React from 'react'
import ExerciseTab from './ExerciseTab'
import  './Exercise.css'
// import styled from 'styled-components';

// const EBDiv = styled.div`
//     border: 1px solid red;
//     float: left;
// `

// export default function ExerciseBar(props) {
//     return (
//         <EBDiv>
//             <div className="ex-tab ex-tab-main flex justify-between">
//                 <h2 className="ex-body">Exercises</h2>
//                 <button onClick={()=>props.startAdding()}className="g-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"> + Add</button>
//             </div>
//             {props.exercises.map((exercise,i) => {
//                 if(exercise.user_id === Number(props.user_id)) {
//                 return <ExerciseTab key={exercise.id} index={i} exercise={exercise} selectExercise={props.selectExercise}/> 
//                 }} 
//             )}
//         </EBDiv>
//     )
// }

 export default function ExerciseBar(props) {
    return (
        <div className="bg-gray-400 h-auto ex-bar overflow-y-scroll">
            <div className="ex-tab ex-tab-main flex justify-between">
                <h2 className="ex-body">Exercises</h2>
                <button onClick={()=>props.startAdding()}className="addBtn g-transparent  font-semibold hover:text-white border hover:border-transparent"> + Add</button>
            </div>
            {props.exercises.map((exercise,i) => {
                if(exercise.user_id === Number(props.user_id)) {
                return <ExerciseTab key={exercise.id} index={i} exercise={exercise} selectExercise={props.selectExercise}/> 
                }} 
            )}
        </div>
    )
} 


