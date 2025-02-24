import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';

function SignUp() {
    const [state, setState] = useState({
        userData: { name:'', email: '', password: '', confirmpassword: ''},
        errorFields: {},
    });
    const navigate = useNavigate()
    function handleChange(event){
        const updatedFields = { ...state.userData };
        updatedFields[event.target.name] = event.target.value;

        setState({
            ...state,
            userData: updatedFields
        });
    }
    function handleSubmit(event){
        event.preventDefault();
        if(handleValidate()){
            const {name, email, password} = state.userData
            const data = {name, email, password}

            axios.get(`http://localhost:5000/UserData?email=${data.email}`)
                .then((response) =>{
                    if(response['data'].length === 0){
                        axios.post(`http://localhost:5000/UserData`, data)
                        .then((responsePost) =>{
                            console.log(responsePost)
                            alert("Sign Up Data Submitted Successfully")
                            setState({
                                userData: {name:'',email: '', password:''},
                                errorFields:{}
                            })
                            navigate('/login')
                        })
                    }
                    else{
                        alert("This Email is Already Exists, Please Login")
                        navigate('/login')
                    }
                }
            )
        }
    }
    function handleValidate(){
        let data = state.userData;
        let error = {};
        let formValidate = true;

        const namePattern = /^[a-zA-Z]{4,}$/;
        if(!namePattern.test(data['name'])){
            formValidate = false;
            error['name'] = "Enter Alpabets Only"
        }

        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
        if(!emailPattern.test(data['email'])){
            formValidate = false;
            error['email'] = "Enter Valid Email Address"
        }

        const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
        if(!passwordPattern.test(data['password'])){
            formValidate = false;
            error['password'] = "Password should be like Test123@"
        }

        if(!data['password'] === data['confirmpassword']){
            formValidate = false;
            error['confirmpassword'] = "Confirm Password must match the Password"
        }
        setState(prevState => ({
            ...prevState, errorFields: error
        }))
        return formValidate;
    }
  return (
    <div className='Body'>
            <div className='Form'>
                <form onSubmit={handleSubmit}>
                    <h3> Sign Up </h3>
                    <div className='Flex'>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name='name'
                            value={state.userData.name}
                            placeholder='Enter Name'
                            onChange={handleChange}
                        />
                        <span>{state.errorFields.name}</span>
                    </div>
                    <div className='Flex'>
                        <label htmlFor='email'>Email: </label>
                        <input
                            type="email"
                            name='email'
                            value={state.userData.email}
                            placeholder='Enter Email'
                            onChange={handleChange}
                        />
                        <span>{state.errorFields.email}</span>
                    </div>
                    <div className='Flex'>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name='password'
                            value={state.userData.password}
                            placeholder='Enter Password'
                            onChange={handleChange}
                        />
                        <span>{state.errorFields.password}</span>
                    </div>
                    <div className='Flex'>
                        <label htmlFor="confirmpassword">Confirm Password: </label>
                        <input
                            type="password"
                            name='confirmpassword'
                            value={state.userData.confirmpassword}
                            placeholder='Enter Confirm Password'
                            onChange={handleChange}
                        />
                        <span>{state.errorFields.confirmpassword}</span>
                    </div>
                    <div className='button'>
                        <button>Sign Up</button>
                    </div>
                    <br />
                    Already have an account? <Link to="/Login"> Login</Link> here
                </form>
            </div>
        </div>
  )
}

export default SignUp