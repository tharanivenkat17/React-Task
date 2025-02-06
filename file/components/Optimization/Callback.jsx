import React, { useState, useCallback } from 'react';

function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <Child handleClick={handleClick} />
      <p>Count: {count}</p>
    </>
  );
}
export default Callback;

function Child({ handleClick }) {
  console.log('Child rendered');
  return <button onClick={handleClick}>Increase Count</button>;
}

