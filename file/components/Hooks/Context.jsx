import React, { createContext, useContext, useState } from 'react'

const ValueContext = createContext()
export default function Context() {
    const [text,setText] = useState('React')
    return (
        <>
            <h1>Use Context Hook</h1>
            {/* Provider is to declare text as global */}
            <ValueContext.Provider value={text} >
            <Component1  />
            </ValueContext.Provider>
        </>
    )
}

function Component1() {
    return (
        <>
            <h3>Component 1</h3>
            <Component2 />
        </>
    )
}
function Component2() {
    return (
        <>
            <h3>Component 2</h3>
            <Component3  />
        </>
    )
}
function Component3() {
    return (
        <>
            <h3>Component 3 </h3>
            <Component4 />
        </>
    )
}
function Component4() {
    const context = useContext(ValueContext)
    return (
        <>
            <h3>Component 4</h3>
            <p>text {context}</p>
        </>
    )
}