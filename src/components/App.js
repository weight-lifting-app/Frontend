import React, { Component } from 'react';
import '../App.css';
import {Link, Route, NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';
//component imports
import Login from './Login';
import Register from './Register';
import Home from './Home';
import AddForm from './AddForm'
import styled from 'styled-components'

const AppDiv = styled.div`
font-family: 'Montserrat', sans-serif;

`
const OnBoardButtons = styled.button`
background: #BB1333;
width: 150px;
height: 50px;
border-radius: 5px;
color: #FFFFFF;
font-size: 14px;
margin: 10px;
`



class App extends Component {
  constructor() {
    super();
    this.state ={
      exercises: [],
      userId: null,
      username: '',
      password: '',
      headers: {}
    }
  }


logOutHandler = () => {
    localStorage.clear();
    alert("Thank You For Using My Application! Come Back Soon!");
    this.props.history.push('/');
    setInterval(() => window.location.reload(), 900);
};


componentDidMount() {
  if(!this.state.userId){
    const id = localStorage.getItem('user_id')
    this.setState({userId: id})
  }
  const requestConfig = {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    }
    this.setState({headers: requestConfig})
  this.getExercises(requestConfig)
}

getExercises(requestConfig){
  console.log(requestConfig)
  if (requestConfig === null) {
    requestConfig = this.state.headers
  }
  axios
  .get("https://lambdafit.herokuapp.com/exercises", requestConfig)
  .then(res => this.setState({ exercises: res.data }))
  .catch(error => console.log(error));
}

addExercise = exercise => {
  console.log(exercise);
  let ex = {...exercise, 'user_id':this.state.userId}
  console.log(ex)
  axios
      .post("https://lambdafit.herokuapp.com/exercises", ex, this.state.headers)
      .then(res => {
      console.log(res)
      // const exer = [...this.state.exercises, ...res.data]
      // console.log(exer)
      // this.setState({ exercises: exer});
      this.getExercises(this.state.headers)
      this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  updateExercise = (updatedExercise, id) => {
    console.log('exercise', updatedExercise)
    console.log('id', id)
    axios
    .put(`https://lambdafit.herokuapp.com/exercises/${id}`, updatedExercise, this.state.headers)
    .then(res => {
      console.log('res', res)
      this.getExercises(this.state.headers);
      this.props.history.push("/");
    })
    .catch(err => console.log('err', err))
  }

  submitLogin = (event) => {
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    event.preventDefault();
    axios
    .post('https://lambdafit.herokuapp.com/auth/login', newUser)
    .then(res => {
        console.log('result', res)
        this.setState({userId: res.data.user_id})
        localStorage.setItem('user_id', res.data.user_id)
        localStorage.setItem('token', res.data.token)
        // const requestConfig = {
        //   headers: {
        //     authorization: res.data,
        //   }
        // }
        // this.setState({headers: requestConfig})
        this.props.history.push('/')
        // Change after styling 
        window.location.reload(); 
    })
    .catch(err => {
        console.log(err)
    })
}

submitRegister = (event, user) => {
  event.preventDefault();
  if (user.age === '' ) {
      user.age = null;
  }
  if (user.weight === '' ) {
      user.weight = null;
  }
  axios
  .post('https://lambdafit.herokuapp.com/auth/register', user)
  .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.registered.id)
      console.log('then', res);
      this.props.history.push('/')
      this.setState({userId: res.data.registered.id})
  })
  .catch(err => console.log('err', err))
};

handleInput = e => {
  this.setState({ [e.target.name]: e.target.value});
}

deleteExercise = id => {
  // const id = this.state.exercises.id
  console.log(id)
  axios
    .delete(`https://lambdafit.herokuapp.com/exercises/${id}`, this.state.headers)
    .then(res => {
      console.log('res', res);
      // this.setState({ exercises: res.data });
      this.getExercises(this.state.headers);
      this.props.history.push("/");
    })
    .catch(err => console.log('err', err));
};




  render() {
    const isLoggedIn = localStorage.getItem('token');

    return (
      <AppDiv>
        {isLoggedIn ? (
          <div>
          <nav>
            <h1>Workout Journal</h1>
            <div className='nav-links'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/add'>Add Workout</NavLink>
              <NavLink to='/' onClick={this.logOutHandler}>Log Out</NavLink>
            </div>
          </nav>
          <Route exact path="/" render={props => <Home {...props} exercises={this.state.exercises} deleteExercise={this.deleteExercise} user_id={this.state.userId} updateExercise={this.updateExercise} />  } />
          <Route exact path='/add' render={props => <AddForm {...props} addExercise={this.addExercise}/> } />
        </div>
        ) : (
        <div className='App onBoard'>
          <h1>Welcome To LambdaFit</h1>
          <div className='home-buttons'>
            <h3>Please Login Or Register</h3>
            <Link to="/login">
              <OnBoardButtons>Login</OnBoardButtons>
            </Link>
            <Link to="/register">
              <OnBoardButtons>Register</OnBoardButtons>
            </Link>
          </div>
          <Route exact path="/login" render={props => <Login {...props} username={this.state.username} password={this.state.password} submitLogin={this.submitLogin} handleInput={this.handleInput} /> } />
         <Route exact path="/register" render={props => <Register {...props} userId={this.state.userId} submitRegister={this.submitRegister} /> } />
          
        </div>
        )}
      </AppDiv>
    );
  }
}

export default withRouter(App);