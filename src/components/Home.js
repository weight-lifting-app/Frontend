

import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AddForm from './AddForm';
import Card from './Card';
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

    // componentDidMount() {
    //     axios
    //       .get("https://lambdafit.herokuapp.com/exercises")
    //       .then(res => this.setState({ exercises: res.data }))
    //       .catch(error => console.log(error));
    // }

    // addExercise = exercise => {
    // axios
    //     .post("https://lambdafit.herokuapp.com/exercises", exercise)
    //     .then(res => {
    //     console.log(res)
    //     this.setState({ exercises: res.data });
    //     this.props.history.push("/");
    //     })
    //     .catch(err => console.log(err));
    // };

    // deleteExercise = exercise => {
        
    // }
    // handleDelete = (e, id) => {
    //     e.preventDefault();
    //     this.props.deleteExercise(id);
    // }

    // moveToUpdate = (id) => {
    //     const activeState = this.state.isEditing;
    //     this.setState({
    //         isEditing: !activeState,
    //         selected: id
    //     })
    // }

    // handleInput = e => {
    //     this.setState({ [e.target.name]: e.target.value});
    // }

    // handleUpdate = (e, id) => {
    //     console.log('hu', id)
    //     const updateChanges = {
    //         name: this.state.name,
    //         body_region: this.state.body_region,
    //         amount_lifted: this.state.amount_lifted,
    //         reps: this.state.reps,
    //         sets: this.state.sets,
    //         date: this.state.date
    //     }
    //     e.preventDefault();
    //     this.props.updateExercise(updateChanges, id);
    //   } 
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