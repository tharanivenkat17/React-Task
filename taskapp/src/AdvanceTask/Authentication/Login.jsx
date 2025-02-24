import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useAuth } from './AuthContext';

function Login() {
    const { login } = useAuth()
    const navigate = useNavigate();
    const [state, setState] = useState({
        userData: { email: '', password: '' },
        errorFields: {},
    });

    function handleChange(event) {
        const updatedData = { ...state.userData };
        updatedData[event.target.name] = event.target.value;

        setState({
            ...state,
            userData: updatedData,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (handleValidate()) {
            const { email, password } = state.userData;
            const data = { email, password }
            axios.get(`http://localhost:5000/UserData?email=${data.email}`)
                .then((response) => {
                    if (response.data.length === 0) {
                        setState(prevState => ({
                            ...prevState,
                            errorFields: { email: 'No user in this email' }
                        }))
                    }
                    else {
                        const user = response.data[0]
                        if (user.password === data.password) {
                            alert('Login Successful!')
                            login()
                            navigate('/')
                            setState({
                                userData: { email: '', password: '' },
                                errorFields: {}
                            })
                        }
                        else {
                            setState(prevState => ({
                                ...prevState,
                                errorFields: { password: 'Password does not match' }
                            }))
                        }
                    }
                }
            )
        }
    }

    function handleValidate() {
        let data = state.userData;
        let error = {};
        let formValidate = true;

        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
        if (!emailPattern.test(data['email'])) {
            formValidate = false;
            error['email'] = 'Enter Valid Email Address';
        }

        const passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
        if (!passwordPattern.test(data['password'])) {
            formValidate = false;
            error['password'] = 'Password should be like Test123@';
        }
        setState((prevState) => ({
            ...prevState,
            errorFields: error,
        }));
        return formValidate;
    }

    return (
        <div className='Body'>
            <div className='Form'>
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <div className='Flex'>
                        <label htmlFor='email'>Email: </label>
                        <input
                            type='text'
                            name='email'
                            value={state.userData.email}
                            placeholder='Enter Email'
                            onChange={handleChange}
                            required
                        />
                        <span>{state.errorFields.email}</span>
                    </div>
                    <div className='Flex'>
                        <label htmlFor='password'>Password: </label>
                        <input
                            type='password'
                            name='password'
                            value={state.userData.password}
                            placeholder='Enter Password'
                            onChange={handleChange}
                            required
                        />
                        <span>{state.errorFields.password}</span>
                    </div>
                    <div className='button'>
                        <button>Login</button>
                    </div>
                    <br />
                    Click <Link to='/SignUp'>Sign Up</Link> to create your account
                </form>
            </div>
        </div>
    );
}

export default Login;
