

import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AddForm from './AddForm';
import ExerciseBar from './ExerciseBar';
import ExerciseCard from './ExerciseCard';
import './Exercise.css'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selected: {},
            isEditing: false,
            name: '',
            body_region: '',
            amount_lifted: '',
            reps: '',
            sets: '',
            date: '',
            action: false,
            isAdding: false
        }
    }


    selectExercise = (e) =>{
        const target = Number(e.target.id)
        let arr = []
        let i
        for(i=0; i < this.props.exercises.length; i++){
            if (this.props.exercises[i].id === target){
                arr.push(this.props.exercises[i])
            }
        }
       this.setState({
           selected:arr[0],
           action: true
        })
    }
    rebootExercise = () =>{
        this.setState({
            action: false,
            isAdding: false,
            isEditing: false,
        })
    }
    startAdding = () =>{
        this.setState({
            isAdding: true,
            action: true
        })
    }

    render() {
        return (
            <div className='container-home'>
                <div className='exercise-list-wrapper'>
                    <h1>Workouts</h1>
                    <h3>To Add A New Workout, Navigate To Add Workout</h3>
                    <h3>To Update An Existing Workout, Simply Click Update Below Each Workout</h3>
                    <h3>To Delete An Existing Workout, Simply Click Delete Below Each Workout</h3>
                    <section className="flex w-4/5 mx-auto bg-red-900 exercise-container space-between">
                        <ExerciseBar {...this.props} selectExercise={this.selectExercise} startAdding={this.startAdding}/>
                        <ExerciseCard {...this.props} isAdding={this.state.isAdding}selected={this.state.selected} action={this.state.action} updateExercise={this.props.updateExercise} deleteExercise={this.props.deleteExercise} rebootExercise={this.rebootExercise} addExercise={this.props.addExercise}/>
                    </section>
                    
                </div>
                {/* <Route exact path='/add' render={props => <AddForm {...props} /> } /> */}
            </div>
            )
        }
}

export default Home;