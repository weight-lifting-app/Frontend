import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';


class Home extends React.Component {
    constructor(props) {
        super(props);
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
    handleDelete = (e, id) => {
        e.preventDefault();
        this.props.deleteExercise(id);
    }

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
                                console.log("!", exercise);
                        return <div className='exercises' key={exercise.id}>
                            <h2>{exercise.name}</h2>
                            <h3>Body Part Targeted: {exercise.body_region}</h3>
                            <h3>Sets: {exercise.sets}</h3>
                            <h3>Reps: {exercise.reps}</h3>
                            <h3>Weight Lifted: {exercise.amount_lifted}</h3>
                            <h4>Last Completion: {exercise.date}</h4>
                            <button onClick={(e) => this.handleDelete(e, exercise.id)}>Delete Workout</button>
                            <button>Update Workout</button>
                        </div>
                    }
                    })}
                </div>
                <Route exact path='/add' render={props => <AddForm {...props} addExercise={this.addExercise}/> } />
                <Route exact path='/update' component={UpdateForm} />
            </div>
        )
    }
}

export default Home;