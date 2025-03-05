import React, { useRef, useState } from 'react';

function UncontrolledComponent() {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState({});

  function validate() {
    const newError = {};
    if (!/\S+@\S+\.\S+/.test(email.current.value)) {
      newError.email = "Enter a valid Mail Id";
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/.test(password.current.value)) {
      newError.password = "Password must be at least 7 characters long, including uppercase, lowercase, number, and special character";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  }

  function submit(e) {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted");
      console.log(email.current.value);
      console.log(password.current.value);
      email.current.value = "";
      password.current.value = "";
      setError({});
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td><input type="email" ref={email} required /></td>
              <td><span style={{ color: "red" }}>{error.email}</span></td>
            </tr>
            <tr>
              <td>Password:</td>
              <td><input type="password" ref={password} required /></td>
              <td><span style={{ color: "red" }}>{error.password}</span></td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UncontrolledComponent;