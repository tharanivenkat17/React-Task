import React from 'react'
import HOC from './HOC'

const ButtonClick = (props) => {
  return (
    <>
      <button onClick={() => props.change()}> Increase Count {props.number}</button>
    </>
  )
}

export default HOC(ButtonClick)