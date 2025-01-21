import React, { useRef, useState } from 'react';

const Uncontrolled = () => {
  // Use refs to get the form field values
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  // State to manage error messages
  const [errors, setErrors] = useState({});

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    if (!nameRef.current.value) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z]+$/.test(nameRef.current.value)) {
      newErrors.name = "Please enter only alphabets";
    }

    if (!emailRef.current.value) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!passwordRef.current.value) {
      newErrors.password = "Password is required";
    } else if (passwordRef.current.value.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with form submission logic
      console.log('Form submitted successfully');
      console.log(nameRef.current.value);
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);

      // Reset form fields after successful submission
      nameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      setErrors({}); // Clear errors
    }
  };

  return (
    <form onSubmit={handleSubmit} name="form" method='post'>
      <br />
      <table>
        <tbody>
          <tr>
            <td><label>Name</label></td>
            <td><input type="text" placeholder='Enter Name' ref={nameRef} /></td>
            <td>{errors.name && <span>{errors.name}</span>}</td>
          </tr>
          <tr>
            <td><label>Email</label></td>
            <td><input type="email" placeholder='Enter Email' ref={emailRef} /></td>
            <td>{errors.email && <span>{errors.email}</span>}</td>
          </tr>
          <tr>
            <td><label>Password</label></td>
            <td><input type="password" placeholder='Enter Password' ref={passwordRef} /></td>
            <td>{errors.password && <span>{errors.password}</span>}</td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit" className="submit">Submit</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Uncontrolled;