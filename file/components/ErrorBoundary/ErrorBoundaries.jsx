import React, { useState } from 'react'

function ErrorBoundaries() {
    const [count,setCount] = useState(0)
    if (count===3){
        throw new Error('Danger')
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default ErrorBoundaries