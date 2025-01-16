import React, { Component } from 'react'
import HelloWorld from './HelloWorld.jsx'
import FunctionalComponent from './FunctionalComponent.jsx'
import ClassComponent from './ClassComponent.jsx'


export class App extends Component {
  render() {
      const data = [
    { id: 12345, name: 'Siva', phone: 7418876453, salary: 30000, location: 'Chennai' },
    { id: 12234, name: 'Arun', phone: 7418337656, salary: 30000, location: 'Delhi' }
  ]
    return (
      <div>
        <HelloWorld></HelloWorld>
        <FunctionalComponent details={data}></FunctionalComponent>
        <ClassComponent details={data}></ClassComponent>
      </div>
    )
  }
}

export default App