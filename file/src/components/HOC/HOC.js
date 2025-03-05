import React, { useState } from 'react'

const HOC = (Original) => {
  const HOCComponent = (props) => {
    const [count, setCount] = useState(0)

    const changeCount = () => {
      setCount(count + 1)
    }

    return (
      <>
        <Original number={count} change={changeCount} {...props} />
      </>
    )
  }

  return HOCComponent
}

export default HOC