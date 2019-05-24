

import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import AddForm from './AddForm';
import ExerciseBar from './ExerciseBar';
import ExerciseCard from './ExerciseCard';
import './Exercise.css'
import styled from 'styled-components';


const HomeDiv = styled.div`
    text-align: center;
`
const LetsGetMoving = styled.h1`
    font-size: 45px;
    background: #BB1333;
    color: white;
`

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
                <HomeDiv>
                    <LetsGetMoving>Let's Get Moving</LetsGetMoving>
                    <section className="backGround flex w-4/5 mx-auto exercise-container space-between">
                        <ExerciseBar {...this.props} selectExercise={this.selectExercise} startAdding={this.startAdding}/>
                        <ExerciseCard {...this.props} isAdding={this.state.isAdding}selected={this.state.selected} action={this.state.action} updateExercise={this.props.updateExercise} deleteExercise={this.props.deleteExercise} rebootExercise={this.rebootExercise} addExercise={this.props.addExercise}/>
                    </section>
                    
                </HomeDiv>
                {/* <Route exact path='/add' render={props => <AddForm {...props} /> } /> */}
            </div>
            )
        }
}

export default Home;