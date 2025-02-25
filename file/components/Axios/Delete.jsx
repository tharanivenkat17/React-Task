import axios from 'axios';
import React, { useState } from 'react'

function Delete() {
    const [id, setId] = useState('')
    function handleChange(event){
        setId(event.target.value)
    }
    function handleDelete(event){
        event.preventDefault();

        axios.delete(`http://localhost:5500/Data/${id}`)
            .then(() => {
                alert(`ID ${id} is Deleted Successfully`)
                setId('');
            })
            .catch(() =>{
                alert("Error")
            })
    }
  return (
    <div>
        <h3>Delete Data in Axios</h3>
        <form onSubmit={handleDelete}>
            <label htmlFor="id">Enter Id of data to be Delete: </label> 
            <input 
                type="number" 
                value={id} 
                onChange={handleChange} 
                placeholder='Id to be deleted'
                required
            /> &nbsp;
            <button type='Submit'> Delete </button>
        </form>
    </div>
  )
}

export default Delete
