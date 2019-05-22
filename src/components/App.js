import React, { Component } from 'react';
import '../App.css';
import {Link, Route, NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';
//component imports
import Login from './Login';
import Register from './Register';
import Home from './Home';
import AddForm from './AddForm'
import UpdateForm from './UpdateForm'


class App extends Component {
  constructor() {
    super();
    this.state ={
      exercises: [],
      userId: null,
      username: '',
      password: ''
    }
  }


  logOutHandler = () => {
    localStorage.clear();
    alert("Thank You For Using My Application! Come Back Soon!");
    this.props.history.push('/');
    setInterval(() => window.location.reload(), 900);
};


componentDidMount() {
  if(this.state.userId === null){
    const id = localStorage.getItem('user_id')
    this.setState({userId: id})
  }
  this.getExercises()
}

getExercises(){
  axios
  .get("https://lambdafit.herokuapp.com/exercises")
  .then(res => this.setState({ exercises: res.data }))
  .catch(error => console.log(error));
}

addExercise = exercise => {
  console.log(exercise);
  let ex = {...exercise, 'user_id':this.state.userId}
  console.log(ex)
  axios
      .post("https://lambdafit.herokuapp.com/exercises", ex)
      .then(res => {
      console.log(res)
      // const exer = [...this.state.exercises, ...res.data]
      // console.log(exer)
      // this.setState({ exercises: exer});
      this.getExercises()
      this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

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
        this.props.history.push('/')
        // window.location.reload(); 
    })
    .catch(err => {
        console.log(err)
    })
}

handleInput = e => {
  this.setState({ [e.target.name]: e.target.value});
}

  render() {
    const isLoggedIn = localStorage.getItem('token');

    return (
      <div className='App'>
        {isLoggedIn ? (
          <div>
          <nav>
            <h1>Workout Journal</h1>
            <div className='nav-links'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/add'>Add Workout</NavLink>
              <NavLink to='/update'>Update Workout</NavLink>
              <NavLink to='/' onClick={this.logOutHandler}>Log Out</NavLink>
            </div>
          </nav>
          <Route exact path="/" render={props => <Home {...props} exercises={this.state.exercises}  user_id={this.state.userId}/> } />
          <Route exact path='/add' render={props => <AddForm {...props} addExercise={this.addExercise}/> } />
          <Route exact path='/update' component={UpdateForm} />
        </div>
        ) : (
        <div className='App onBoard'>
          <h1>Welcome To LambdaFit</h1>
          <div className='home-buttons'>
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn-register">Register</button>
            </Link>
          </div>
          <Route exact path="/login" render={props => <Login {...props} username={this.state.username} password={this.state.password} submitLogin={this.submitLogin} handleInput={this.handleInput} /> } />
          <Route exact path="/register" component={Register} />
          
        </div>
        )}
      </div>
    );
  }
}

export default withRouter(App);
