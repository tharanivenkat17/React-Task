import React, { useState } from 'react'
function UseState() {
    const [count, setCount] = useState(0);

    function sub(){
        setCount(count-1)
    }
  return (
    <div>
        <h1> {count} </h1>
        <button onClick={()=>{setCount(count+1)}}>Add</button>
        <button onClick={sub}>Sub</button>
    </div>
  )
}
export default UseState