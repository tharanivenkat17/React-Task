import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    // useEffect(()=>{
    //     console.log("Effect")
    // })

    // useEffect(()=>{
    //     console.log("Effect")
    // },[count1])

    useEffect(()=>{
        console.log("Effect")
    },[])

  return (
    <>
      <h1>Use Effect Hook</h1>
        <p>Count 1 : {count1}</p>
        <p>Count 2 : {count2}</p>
        <button onClick={()=> setCount1(count1 +1 )}> Increse 1</button>
        <button onClick={()=> setCount2(count2 +2 )}> Increse 2</button>
    </>
  )
}
