import React, { useCallback, useMemo, useState } from 'react'

function Performance() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const double = useMemo(() => {
        return number + 1;
    }, [number]);

    const increse = useCallback(() => {
        setNumber((prev) => prev + 1)
    }, []);

    return (
        <div>
            <h3>Performance Optimization</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <MemoComponent number={double} onClick={increse} />
            <h4>Double the Value: {double}</h4>
            <button onClick={increse}>Increase</button>
        </div>
    )
}

export default Performance

const MemoComponent = React.memo(({ number, onClick }) => {
    return (
        <div>
            <h4>Number : {number}</h4>
            <button onClick={onClick}>Increase</button>
        </div>
    )
})