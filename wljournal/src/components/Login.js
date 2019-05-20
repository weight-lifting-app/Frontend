import React from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'cash',
            password: 'pass'
        }
    }
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    submitLogin = (event) => {
        event.preventDefault();
        axios
        .post('https://lambdafit.herokuapp.com/auth/login', this.state)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/home')
        })
        .catch(err => {
            console.log(err)
        })
    }

    // submitLogin = (event, user) => {
    //     event.preventDefault();

    //     axios.post('http://localhost:5000/api/auth/login', user)
    //     .then(res => {
    //         localStorage.setItem('token', res.data.token);
    //         this.props.history.push('/users')
    //     })
    //     .catch(err => console.log(err))
    // };


    render() {
        return (
            <div className='login-wrapper'>
                <div>
                    <h2>Login With Username and Password</h2>
                </div>
                <div className='input'>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInput}
                        />
                        <input 
                        type="text"
                        placeholder='Password'
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInput}
                        />
                        <button onClick={this.submitLogin}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
