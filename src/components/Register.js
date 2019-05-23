import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            age: "",
            height: "",
            weight: "",
            gender: "",
            email: "",
        }
    }
    // handleInput = e => {
    //     this.setState({ [e.target.name]: e.target.value});
    // }


    //add something to this...
    handleInput = (e, radix)=> {
        if(e.target.name === 'age' || e.target.name === 'weight'){
            const number = parseInt(e.target.value, radix)
            this.setState({ [e.target.name]: number});
        }
        else{
            this.setState({ [e.target.name]: e.target.value});
        }
    }


    // submitRegister = (event) => {
    //     event.preventDefault();
    //     const user = this.state;
    //     if (user.age === '' ) {
    //         user.age = null;
    //     }
    //     if (user.weight === '' ) {
    //         user.weight = null;
    //     }
    //     axios
    //     .post('https://lambdafit.herokuapp.com/auth/register', user)
    //     .then(res => {
    //         localStorage.setItem('token', res.data.token);
    //         localStorage.setItem('user_id', res.data.registered.id)
    //         console.log('then', res);
    //         this.setState({
    //             username: "",
    //             password: "",
    //             age: "",
    //             height: "",
    //             weight: "",
    //             gender: "",
    //             email: ""
    //         })
    //         this.props.history.push('/')
    //         this.setState({userId: id})
    //     })
    //     .catch(err => console.log('err', err))
    // };

    handleRegister = e => {
        this.props.submitRegister(e, this.state)
        this.setState({
            username: "",
            password: "",
            age: "",
            height: "",
            weight: "",
            gender: "",
            email: ""
        })
    }

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
                        type="password"
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
                        <button onClick={(e) => this.handleRegister(e)}>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
