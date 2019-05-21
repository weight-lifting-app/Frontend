import React, { Component } from 'react';
import '../App.css';
import {Link, Route} from 'react-router-dom';

//component imports
import Login from './Login';
import Register from './Register';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* {user ? ( */}
          <div className='App Homepage'>
            <h1>Home Page</h1>
          </div>
        {/* ) : ( */}
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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default App;
