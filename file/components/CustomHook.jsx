import React, { useState } from 'react'

function useCount(intialValue) {
  const [count, setCount] = useState(intialValue);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const multiple = () => setCount(count * 2);

  return{ count, increase, decrease, multiple}
}

function CustomHook() {
  const {count, increase, decrease, multiple} = useCount(0)
  return (
    <div>
      <h1>Custom Hook</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={multiple}>Multiple by 2</button>
    </div>
  )
}

export default CustomHook