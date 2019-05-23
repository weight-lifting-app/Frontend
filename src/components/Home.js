

import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AddForm from './AddForm';
import Card from './Card';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selected: '',
            isEditing: false,
            name: '',
            body_region: '',
            amount_lifted: '',
            reps: '',
            sets: '',
            date: ''
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

    render() {
        return (
            <div className='container-home'>
                <div className='exercise-list-wrapper'>
                    <h1>Workouts</h1>
                    <h3>To Add A New Workout, Navigate To Add Workout</h3>
                    <h3>To Update An Existing Workout, Simply Click Update Below Each Workout</h3>
                    <h3>To Delete An Existing Workout, Simply Click Delete Below Each Workout</h3>
                    {this.props.exercises.map(exercise => {
                        if(exercise.user_id === Number(this.props.user_id)) {
                            return <Card deleteExercise={this.props.deleteExercise} updateExercise={this.props.updateExercise} exercise={exercise} key={exercise.id}/>
                        }} 
                    )}
                </div>
                <Route exact path='/add' render={props => <AddForm {...props} addExercise={this.addExercise}/> } />
            </div>
            )
        }
}

export default Home;