import React from 'react';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            isEditing: false,
            name: this.props.exercise.name,
            body_region: this.props.exercise.body_region,
            amount_lifted: this.props.exercise.amount_lifted,
            reps: this.props.exercise.reps,
            sets: this.props.exercise.sets,
            date: this.props.exercise.date
        }

    }

    handleDelete = (e, id) => {
        e.preventDefault();
        this.props.deleteExercise(id);
    }

    moveToUpdate = (id) => {
        const activeState = this.state.isEditing;
        this.setState({
            isEditing: !activeState,
            selected: id
        })
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleUpdate = (e, id) => {
        console.log('hu', id)
        const updateChanges = {
            name: this.state.name,
            body_region: this.state.body_region,
            amount_lifted: this.state.amount_lifted,
            reps: this.state.reps,
            sets: this.state.sets,
            date: this.state.date
        }
        e.preventDefault();
        this.props.updateExercise(updateChanges, id);
        this.setState({
            isEditing: false
        })
      } 

    render() {
        return (
        <div className='exercises' key={this.props.exercise.id}>
        {this.state.isEditing ? (
        <div>
        <h2> Exercise Name: 
            <input 
            type="text"
            placeholder='Exercise Name'
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            />
        </h2>
        <h3>Body Part Targeted: 
            <input 
            type="text"
            placeholder='Body Part Targeted'
            name="body_region"
            value={this.state.body_region}
            onChange={this.handleInput}
            />
        </h3>
        <h3>Sets:
        <input 
        type="text"
        placeholder='Weight Lifted'
        name="amount_lifted"
        value={this.state.amount_lifted}
        onChange={this.handleInput}
        />
        </h3>
        <h3>Reps:
            <input 
            type="text"
            placeholder='Reps'
            name="reps"
            value={this.state.reps}
            onChange={this.handleInput}
            />  
        </h3>
        <h3>Weight Lifted: 
            <input 
            type="text"
            placeholder='Sets'
            name="sets"
            value={this.state.sets}
            onChange={this.handleInput}
            />
        </h3>
        <h4>Last Completion: 
            <input 
            type="text"
            placeholder='Date'
            name="date"
            value={this.state.date}
            onChange={this.handleInput}
            />
        </h4>
        <button onClick={(e) => this.handleUpdate(e, this.props.exercise.id)}> Submit </button>
        </div>
        )
        : (
        <div>
        <h2>{this.props.exercise.name}</h2>
        <h3>Body Part Targeted: {this.props.exercise.body_region}</h3>
        <h3>Sets: {this.props.exercise.sets}</h3>
        <h3>Reps: {this.props.exercise.reps}</h3>
        <h3>Weight Lifted: {this.props.exercise.amount_lifted}</h3>
        <h4>Last Completion: {this.props.exercise.date}</h4>
        <button onClick={(e) => this.handleDelete(e, this.props.exercise.id)}>Delete Workout</button>
        <button onClick={(e) =>this.moveToUpdate(e, this.props.exercise.id)}>Update Workout</button>
        </div>
        )
        }
        </div>
        )
    }

}

export default Card;
