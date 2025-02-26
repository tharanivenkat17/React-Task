import React, { Component, useState } from 'react'
/////////////    Do not call Hooks in class components   ////////////
export class ClassComponent extends Component {
  render() {
    const [count, setCount] = useState(0)
    return (
      <div>
        <button onClick={()=>(setCount(count+1))}>Add</button>
      </div>
    )
  }
}

export default ClassComponent