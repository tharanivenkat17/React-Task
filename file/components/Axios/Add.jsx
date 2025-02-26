import axios from 'axios';
import React, { useState } from 'react'
import './Add.css';

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
                    .then(() =>{
                        alert('Added Data to Axios')
                        setDatum('');
                    })
                }
                else {
                    const existingData = response.data[0];
                    axios.put(`http://localhost:5500/Data/${existingData.id}`, { data: datum })
                    // axios.patch(`http://localhost:5500/Data/${existingData.id}`, { data: datum })
                        .then(() => {
                            alert(`"${datum}" is already exist, So it is updated in Axios`);
                            setDatum('');
                        })
                }
            })
    }
    return (
        <div>
            <h3>Add Data to Axios</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="datum">Enter Data to be Added: </label>
                <input type="text" value={datum} required onChange={handleChange} /> &nbsp;
                <button type='Submit'> Add</button>
            </form>
        </div>
    )
}

export default Add
