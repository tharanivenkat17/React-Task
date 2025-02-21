import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage';

function Form() {
  const [Data, setData] = useLocalStorage('Data', '')
  const [input, setInput] = useState(Data);
  function handleChange(event) {
    setInput(event.target.value)
  }
  function handleSave() {
    setData(input)
  }
  return (
    <div>
      <h3>Custom Hook</h3>
      <p>Stored Name : {Data ? Data : "No Name Stored"}</p>
      <input
        type="text" 
        placeholder='Enter Name' 
        value={input} 
        onChange={handleChange} 
        style={{border:"solid black"}}
      /> &nbsp;
      <button 
        onClick={handleSave}
        style={{color:"white", background:"green", padding:"4px"}}
      >Save Name</button>
    </div>
  )
}
export default Form