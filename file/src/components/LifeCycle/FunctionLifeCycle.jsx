import React, { useState, useEffect } from 'react';

function FunctionLifeCycle() {

  useEffect(() => {
    console.log('componentDidMount Function');

    return () => {
      console.log('componentWillUnmount Function');
    };
  }, []);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log('Updating Function')
    setCount(count + 1);
  };
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default FunctionLifeCycle;