import React, { useState } from 'react'

export default function MessageError({message, onSubmit}) {
  const [data, setData] = useState(message);
  const [crash, setCrash] = useState(false);

  function handleChange(e) {
    setData(e.target.value);
    console.log(e.target.value); 
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);

    if(data === "crash"){
      setCrash(true);
    }

    onSubmit(data);
    setData("");
  }

  if (crash) {
    throw new Error("CRASHED");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={data} onChange={handleChange} placeholder='Type here'/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}