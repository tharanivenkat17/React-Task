import React, { createContext, useContext, useState } from 'react'

const ValueContext = createContext()
export default function Context() {
    const [text,setText] = useState('React')
    return (
        <div>
            <h1>Use Context</h1>

            {/* Provider is to declare text as global */}
            <ValueContext.Provider value={text} >
            <Component1  />
            </ValueContext.Provider>
            
        </div>
    )
}

function Component1() {
    return (
        <div>
            <h3>Component 1</h3>
            <Component2 />
        </div>
    )
}
function Component2() {
    return (
        <div>
            <h3>Component 2</h3>
            <Component3  />
        </div>
    )
}
function Component3() {
    return (
        <div>
            <h3>Component 3 </h3>
            <Component4 />
        </div>
    )
}
function Component4() {
    const context = useContext(ValueContext)
    return (
        <div>
            <h3>Component 4</h3>
            <p>text {context}</p>
        </div>
    )
}