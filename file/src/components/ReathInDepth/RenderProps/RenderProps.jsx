import React, { useState } from 'react';

function RenderProps() {
  return (
    <Counter
        display={(count) => <p> Count: {count}</p>}
        increase={(add) => (<button onClick={add}>Increase</button>)}
        decrease={(subract) => (<button onClick={subract}>Decrease</button>)}
        multiple={(product) => (<button onClick={product}>Product 2</button>)}
        divide={(by) => (<button onClick={by}>Divide 2</button>)}
    />
  );
};

export default RenderProps;

const Counter = ({ increase, decrease, multiple, divide, display }) => {
    const [count, setCount] = useState(0);
    const add = () => setCount(count + 1);
    const subract = () => setCount(count - 1);
    const product = () => setCount(count * 2);
    const by = () => setCount(count / 2);
  
    return (
      <div>
        {display(count)}
        {increase(add)}
        {decrease(subract)}
        {multiple(product)}
        {divide(by)}
        
      </div>
    );
  };