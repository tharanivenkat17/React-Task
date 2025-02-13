import React, { useEffect, useState } from 'react'

//////////  Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect   /////////////

// function HookInsideHook() {
//     const [count,setCount] = useState(0)

//     useEffect(()=>{
//         const [name, setName] = useState('Siva')
//         console.log(name)
//     },[count])
//   return (
//     <div>
//         <p>{count}</p>
//         <button onClick={()=>(setCount(count+1))}>Add</button>
//     </div>
//   )
// }



function HookInsideHook() {
    const [count,setCount] = useState(0)
    const [name, setName] = useState('Siva')

    useEffect(()=>{
        console.log(name)
    },[count])
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>(setCount(count+1))}>Add</button>
    </div>
  )
}

export default HookInsideHook