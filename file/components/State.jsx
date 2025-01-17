import React, { useState } from 'react'

export default function State() {
  const[count, setCount]= useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Function Count</button>
      <p>Count: {count}</p>
    </div>
  )
}
