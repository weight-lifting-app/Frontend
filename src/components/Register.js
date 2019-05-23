import React from 'react';
import styled from 'styled-components';

const RegisterWrapper = styled.div`
    width: 350px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px 5px 5px grey;
    margin: 0 auto;
    padding: 10px;
    color: #303030;
    border: 1px solid #303030;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid grey;
    padding-top: 10px;
    width: 300px;
    align-items: center;
    
`

const BoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Input = styled.input`
    width: 250px;
    height: 25px;
    border-radius: 5px;
    margin: 10px 0 30px 0;

`


const Button = styled.button`
    width: 250px;
    height: 30px;
    background: #BB1333;
    color: white;
    border-radius: 5px;
    font-size: 14px;

`

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



    handleInput = (e, radix)=> {
        if(e.target.name === 'age' || e.target.name === 'weight'){
            const number = parseInt(e.target.value, radix)
            this.setState({ [e.target.name]: number});
        }
        else{
            this.setState({ [e.target.name]: e.target.value});
        }
    }




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
            <RegisterWrapper>
                <div>
                    <h2>Register</h2>
                    <h4>* Optional Field</h4>
                </div>
                <FormWrapper>
                    <BoxDiv>
                        <label>Login</label>
                        <Input 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInput}
                        />
                        <label>Password</label>
                        <Input 
                        type="password"
                        placeholder='Password'
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInput}
                        />
                        <label>* Age</label>
                        <Input 
                        type="number"
                        placeholder='Age'
                        name="age"
                        value={this.state.age}
                        onChange={this.handleInput}
                        />
                        <label>* Height</label>
                        <Input 
                        type="text"
                        placeholder='Height'
                        name="height"
                        value={this.state.height}
                        onChange={this.handleInput}
                        />
                        <label>* Weight</label>
                        <Input 
                        type="number"
                        placeholder='Weight (Lbs)'
                        name="weight"
                        value={this.state.weight}
                        onChange={this.handleInput}
                        />
                        <label>* Gender</label>
                        <Input 
                        type="text"
                        placeholder='Gender'
                        name="gender"
                        value={this.state.gender}
                        onChange={this.handleInput}
                        />
                        <label>* Email</label>
                        <Input 
                        type="text"
                        placeholder='Email'
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInput}
                        />
                        <Button onClick={(e) => this.handleRegister(e)}>Register</Button>
                    </BoxDiv>
                </FormWrapper>
            </RegisterWrapper>
        )
    }
}

export default Register;
