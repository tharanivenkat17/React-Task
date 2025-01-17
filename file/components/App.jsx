import React from 'react'
import HelloWorld from './HelloWorld.jsx'
import FunctionalComponent from './FunctionalComponent.jsx'
import ClassComponent from './ClassComponent.jsx'
import Demo from './Components.jsx'
import State from './State.jsx'
import ClassMounting from './LifeCycle/ClassMounting.jsx'
import ClassUpdating from './LifeCycle/ClassUpdating.jsx'
import ClassUnmounting from './LifeCycle/ClassUnmounting.jsx'
import FunctionLifeCycle from './LifeCycle/FunctionLifeCycle.jsx'

function App() {
    const employee = [
      { id: 12345, name: 'Siva', phone: 7418876453, salary: 30000, location: 'Chennai' },
      { id: 12234, name: 'Arun', phone: 7418337656, salary: 30000, location: 'Delhi' }
    ]
      return (
        <div>
          {/* <HelloWorld></HelloWorld>
          <FunctionalComponent details={employee}></FunctionalComponent>
          <ClassComponent data={employee}></ClassComponent>
          <Demo name="Siva"></Demo>
          <State></State> */}
          <ClassMounting></ClassMounting>
          <ClassUpdating></ClassUpdating>
          <ClassUnmounting></ClassUnmounting>
          <FunctionLifeCycle></FunctionLifeCycle>
        </div>
  )
}

export default App

