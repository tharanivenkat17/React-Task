import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function increment(value){
        setCount(count+value)
    }
    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
  return (
    <div>
        <h3>Counter: {count}</h3>

        <button onClick={() => increment(5)}>Increment</button> &nbsp;
        <button onClick={decrement}>Decrement</button> &nbsp;
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter