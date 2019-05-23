import React from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    // submitLogin = (event) => {
    //     event.preventDefault();
    //     axios
    //     .post('https://lambdafit.herokuapp.com/auth/login', this.state)
    //     .then(res => {
    //         console.log('result', res)
    //         localStorage.setItem('token', res.data.token)
    //         this.props.history.push('/')
    //         window.location.reload(); 
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }



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
                        value={this.props.username}
                        onChange={this.props.handleInput}
                        />
                        <input 
                        type="password"
                        placeholder='Password'
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleInput}
                        />
                        <button onClick={this.props.submitLogin}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
