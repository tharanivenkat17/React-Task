import React, { useState, Profiler } from 'react';

function Profilers() {
    const [text, setText] = useState('');

  return (
    <Profiler
      id="Profilers"
      onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        console.log('Rendered', id);
        console.log('Phase:', phase);
        console.log('Actual Duration:', actualDuration);
        console.log('Base Duration:', baseDuration);
        console.log('Start Time:', startTime);
        console.log('Commit Time:', commitTime);
    }}
    >
      <div>
        <h1>Profiler</h1>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type Anything"
        />
      </div>
    </Profiler>
  );
}

export default Profilers;
