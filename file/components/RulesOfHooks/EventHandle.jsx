import React, { useState } from 'react'

////////////   Do not call Hooks in event handlers  //////////////

// function EventHandle() {
//     const [count,setCount] = useState(0);
//     function change(){
//         const [name,setName] = useState('');
//         setCount(count+1)
//         setName("Siva")
//     }
//   return (
//     <div>
//         <p>{count}{name}</p>
//         <button onClick={change}>Change</button>
//     </div>
//   )
// }

function EventHandle() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    function change(){
        setCount(count+1)
        setName("Siva")
    }
  return (
    <div>
        <p>{name}{count}</p>
        <button onClick={change}>Change</button>
    </div>
  )
}

export default EventHandle