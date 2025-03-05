import React, { useState } from 'react'

////////     Do not call Hooks inside try/catch/finally blocks   ///////////

// function TryCatch() {
//     let result = null
//     try {
//         const [count,setCount] = useState(0);
//         result = count
//     }
//     catch(error){
//         console.log(error)
//     }
//   return (
//     <div>{result}</div>
//   )
// }

function TryCatch() {
    const [count,setCount] = useState(0);
    let result = null
    try {
        result = count
    }
    catch(error){
        console.log(error)
    }
  return (
    <div>{result}</div>
  )
}

export default TryCatch