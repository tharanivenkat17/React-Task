import React, { useState } from 'react';

const SignUpForm = () => {
    const [userFields, setUserFields] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const [errorFields, setErrorFields] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserFields(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function validateForm() {
        let field = userFields; // Corrected to use userFields
        let error = {};
        let formValid = true;

        const namePattern = /^[a-zA-Z]{4,}$/;
        if (!namePattern.test(field['username'])) { // Corrected to 'username'
            formValid = false;
            error['username'] = 'Name must be characters';
        }

        const emailPattern = /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,8}$/;
        if (!emailPattern.test(field['email'])) {
            formValid = false;
            error['email'] = 'Please enter a valid email address';
        }

        // (?=.*[a-z]) (At least one lowercase letter)
        // (?=.*[A-Z]) (At least one uppercase letter)
        // (?=.*\d) (At least one digit)
        // (?=.*[!@#$%^&*]) (At least one special character)
        // [A-Za-z\d!@#$%^&*]{7,} (Valid characters and length)
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
        if (!passwordPattern.test(field['password'])) {
            formValid = false;
            error['password'] = 'Password must be at least 7 characters long, including uppercase, lowercase, number, and special character';
        }

        if (field['password'] !== field['confirmpassword']) { // Corrected to '!=='
            formValid = false;
            error['confirmpassword'] = 'Confirm Password must match the Password';
        }

        setErrorFields(error); // Corrected to use setErrorFields

        return formValid;
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Clear form fields after successful validation
            setUserFields({
                username: '',
                email: '',
                password: '',
                confirmpassword: ''
            });
            alert("Form Submitted");
            console.log(`
                DETAILS ENTERED:
                    Username: ${userFields.username}
                    Email: ${userFields.email}
                    Password: ${userFields.password}
                    Confirm Password: ${userFields.confirmpassword}
            `);
        }
    };

    return (
        <div>
            <h1>Controlled Forms</h1>
            <form  style={{marginLeft:"450px", textAlign:"left"}} onSubmit={submitForm} name="form" method='post'>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="username">Name</label></td>
                            <td><input
                                type="text"
                                name="username"
                                id='username'
                                value={userFields.username}
                                placeholder='Enter Username'
                                onChange={handleChange}
                                required
                            />
                            </td>
                            <td><span style={{ color: "red" }}>{errorFields.username}</span></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email Id</label></td>
                            <td><input
                                type="text"
                                name="email"
                                id='email'
                                value={userFields.email}
                                placeholder='Enter Email'
                                onChange={handleChange}
                                required
                            /></td>
                            <td><span style={{ color: "red" }}>{errorFields.email}</span></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td><input
                                type="password"
                                name="password"
                                id='password'
                                value={userFields.password}
                                placeholder='Enter Password'
                                onChange={handleChange}
                                required
                            /></td>
                            <td><span style={{ color: "red" }}>{errorFields.password}</span></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="confirmpassword">Confirm Password</label></td>
                            <td><input
                                type="password"
                                name="confirmpassword"
                                id='confirmpassword'
                                value={userFields.confirmpassword}
                                placeholder='Confirm Password'
                                onChange={handleChange}
                                required
                            /></td>
                            <td><span style={{ color: "red" }}>{errorFields.confirmpassword}</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='submit' value=" Submit " /></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default SignUpForm;
