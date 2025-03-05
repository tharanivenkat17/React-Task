import React, { use, useEffect, useRef, useState } from 'react'

export default function Ref() {

    // No rendering
    // const [count,setCount] = useState(0)
    // const countRef = useRef(0)

    // const handleChange = ()=>{
    //     setCount(count+1)
    // }

    // const handleChangeRef = ()=>{
    //     countRef.current++
    // }
    // console.log("render")


    const[input,setInput]=useState("")
    const prevRef = useRef("")
    useEffect(()=>{
        prevRef.current = input
    },[input])
  return (
    <>
      <h1>Use Ref</h1>
        {/* No rendering */}
        {/* <h1>Count {count}</h1>
        <h1>Count Ref {countRef.current}</h1>

        <button onClick={handleChange}>Count</button>
        <button onClick={handleChangeRef}>Count Ref</button> */}

        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <h2>current value:: {input}</h2>
        <h2>Prev value: {prevRef.current}</h2>
    </>
  )
}
