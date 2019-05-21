import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            age: undefined,
            height: "",
            weight: undefined,
            gender: "",
            email: ""
        }
    }
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }


    submitRegister = (event) => {
        event.preventDefault();
        const user = this.state;
        console.log(user);
        console.log(this.state);
        axios
        .post('https://lambdafit.herokuapp.com/auth/register', user)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            console.log('then', res);
            this.setState({
                username: "",
                password: "",
                age: undefined,
                height: "",
                weight: undefined,
                gender: "",
                email: ""
            })
            this.props.history.push('/login')
        })
        .catch(err => console.log('err', err))
    };

    render() {
        return (
            <div className='register-wrapper'>
                <div>
                    <h2>Register With Username and Password</h2>
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
                        <input 
                        type="number"
                        placeholder='Age'
                        name="age"
                        value={this.state.age}
                        onChange={this.handleInput}
                        />
                        <input 
                        type="text"
                        placeholder='Height'
                        name="height"
                        value={this.state.height}
                        onChange={this.handleInput}
                        />
                        <input 
                        type="number"
                        placeholder='Weight (Lbs)'
                        name="weight"
                        value={this.state.weight}
                        onChange={this.handleInput}
                        />
                        <input 
                        type="text"
                        placeholder='Gender'
                        name="gender"
                        value={this.state.gender}
                        onChange={this.handleInput}
                        />
                        <input 
                        type="text"
                        placeholder='Email'
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInput}
                        />
                        <button onClick={(e) => this.submitRegister(e)}>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
