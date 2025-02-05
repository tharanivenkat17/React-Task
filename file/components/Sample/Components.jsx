// import React from 'react'

// export default function Demo(props) {
//   return (
//     <>
//         <h1>{props.name}</h1>
//     </>
//   )
// }

import React, { Component } from 'react'

export class Demo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <><h1>{this.props.name}</h1></>
    )
  }
}

export default Demo