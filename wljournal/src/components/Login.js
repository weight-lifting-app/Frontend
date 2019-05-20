import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

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
                        <button onClick={this.handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
