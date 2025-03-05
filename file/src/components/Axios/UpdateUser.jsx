import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const updatedUser = {
      name: name,
      email: email,
    };

    try {
      const response = axios.put(`http://localhost:5500/UserData?userid=${userId}`, updatedUser);
      setResult('User updated successfully!');
      console.log(response.data); 
    } catch (error) {
      setResult('Error updating user');
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update User</button>
      </form>

      <div>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default UpdateUser;
