import axios from 'axios';
import React, { useState } from 'react'

function Add() {
    const[datum, setDatum] = useState('');
    function handleChange(event){
        setDatum(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault();
        axios.get(`http://localhost:5500/Data?data=${datum}`)
            .then((response) =>{
                if(response.data.length === 0){
                    axios.post(`http://localhost:5500/Data`,{data: datum})
                    .then((responsePost) =>{
                        alert('Added Data to Axios')
                        setDatum();
                    })
                }
            })
    }
    return (
        <div>
            <h3>Add Data to Axios</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="datum">Enter Data: </label>
                <input type="text" value={datum} required onChange={handleChange} /> &nbsp;
                <button type='Submit'> Add</button>
            </form>
        </div>
    )
}

export default Add
