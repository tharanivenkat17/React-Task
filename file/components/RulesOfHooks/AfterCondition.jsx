import React, { useState } from 'react'

//////////   Do not call Hooks after a conditional return statement  //////////

// function AfterCondition() {
//     const [count,setCount] = useState(0);
//     if(count == 5){
//         return <>Count equal to 5</>
//     }
//     const [name,setName] = useState('Siva')
//   return (
//     <div>
//         <button onClick={()=>(setCount(count+1))}>Add {count}</button>
//     </div>
//   )
// }

function AfterCondition() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('Siva')
    if(count == 5){
        return <>Count equal to 5 Name:{name}</>
    }
  return (
    <div>
        <button onClick={()=>(setCount(count+1))}>Add {count}</button>
    </div>
  )
}

export default AfterCondition