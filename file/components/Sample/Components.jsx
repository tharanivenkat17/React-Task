// import React from 'react'

// export default function Demo(props) {
//   return (
//     <div>
//         <h1>{props.name}</h1>
//     </div>
//   )
// }

import React, { Component } from 'react'

export class Demo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div><h1>{this.props.name}</h1></div>
    )
  }
}

export default Demo