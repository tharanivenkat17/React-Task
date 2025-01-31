import React from 'react'
import HOC from './HOC'

const ButtonClick = (props) => {
  return (
    <div>
      <button onClick={() => props.change()}>Count Increase {props.number}</button>
    </div>
  )
}

export default HOC(ButtonClick)