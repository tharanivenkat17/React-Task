import React, { useState } from 'react'

export default function PropDrilling() {
    const [value,setvalue]= useState('React')
  return (
    <>
        <h1>Property Drilling</h1>
        <Component1 value={value}/>
    </>
  )
}

function Component1({value}){
    return(
        <>
            <h3>Component 1</h3>
            <Component2 value={value}/>
        </>
    )  
}
function Component2({value}){
    return(
        <>
            <h3>Component 2</h3>
            <Component3 value={value}/>
        </>
    )  
}
function Component3({value}){
    return(
        <>
            <h3>Component 3</h3>
            <Component4 value={value}/>
        </>
    )  
}
function Component4({value}){
    return(
        <>
            <h3>Component 4</h3>
            <p>Value {value}</p>
        </>
    )  
}