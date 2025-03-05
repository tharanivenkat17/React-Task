import React from 'react'

function Button() {
  let index = 0;

  function change() {
    index = index + 1;
    console.log(index);
  }

  return (
    <>
      <h1>Button</h1>
      <button onClick={() => { alert("Hello") }}>Button</button>
      <button onClick={change}>click {index}</button>
    </>
  )
}

export default Button