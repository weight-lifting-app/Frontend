import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
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






class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }




    render() {
        return (
            <LoginWrapper>
                <div>
                    <h2>Login With Your Username and Password</h2>
                </div>
                <div>
                    <FormWrapper>
                            <BoxDiv>
                                <label>Login</label>
                                <Input 
                                type="text" 
                                placeholder="Username"
                                name="username"
                                value={this.props.username}
                                onChange={this.props.handleInput}
                                />
                                <label>Password</label>
                                <Input 
                                type="password"
                                placeholder='Password'
                                name="password"
                                value={this.props.password}
                                onChange={this.props.handleInput}
                                />
                            </BoxDiv>
                        <Button onClick={this.props.submitLogin}>Login</Button>
                    </FormWrapper>
                </div>
            </LoginWrapper>
        )
    }
}

export default Login;
