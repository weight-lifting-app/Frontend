import React, { Component } from 'react';
import '../App.css';
import {Link, NavLink, Route} from 'react-router-dom';

//component imports
import Login from './Login';
import Register from './Register';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Welcome To LambdaFit</h1>
        <div className='home-buttons'>
          <Link to="/login">
            <button className="btn-login">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn-register">Register</button>
          </Link>
        </div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
