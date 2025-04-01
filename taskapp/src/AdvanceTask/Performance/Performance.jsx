import React, { useCallback, useMemo, useState } from 'react'

function Performance() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const memoizedValue = useMemo(() => {
        console.log('Memoizing count:', count);
        return count * 2;
    }, [count]);
    console.log("Rendering component");

    const [countcall, setCountcall] = useState(0);
    const handleClick = useCallback(() => {
        setCountcall(countcall + 1);
    }, [countcall]);

    return (
        <div>
            <h3>Performance Optimization</h3>
            <h4>Use Memo</h4>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count With Memo: {count}</p>
            <p>Memoized value (count * 2): {memoizedValue}</p>
            <button onClick={() => setCount1(count1 + 1)}>Increment Count Without Memo</button>
            <p>Count Without Memo: {count1}</p>

            <h4>Use Callback</h4>
            <Child handleClick={handleClick} />
            <p>Count: {countcall}</p>
        </div>
    )
}

export default Performance

function Child({ handleClick }) {
    console.log('Child rendered');
    return <button onClick={handleClick}>Increase Count</button>;
}