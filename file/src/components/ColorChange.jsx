import React, { useState } from 'react';

function ColorChange() {
    const [color, setColor] = useState(0);
    const colors = ['red', 'wheat', 'lightblue', 'lightcoral', 'purple'];

    function change() {
        setColor((prevIndex) => (prevIndex + 1) % colors.length);
    }

    return (
        <div
            data-testid="color-box"
            style={{ backgroundColor: colors[color], height: '538px' }}
        >
            <h1>Color</h1>
            <button onClick={change}>Color Change</button>
        </div>
    );
}

export default ColorChange;
