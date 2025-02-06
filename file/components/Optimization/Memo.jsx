import React, { useState, useMemo } from 'react';

function Memo() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const memoizedValue = useMemo(() => {
    console.log('Memoizing count:', count);
    return count * 2; 
  }, [count]);

  console.log("Rendering component");

  return (
    <>
      <h1>Use Memo</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Memoized value (count * 2): {memoizedValue}</p>

      <button onClick={() => setCount1(count1 + 1)}>Increment Count Without Memo</button>
      <p>Count1: {count1}</p>
    </>
  );
}

export default Memo;
