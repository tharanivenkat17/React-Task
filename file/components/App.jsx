import React from 'react'
import Button from './Button.jsx'
import SignUpForm from './Forms/SignUpForm.jsx'
import Uncontrolled from './Forms/Uncontrolled.jsx'
import PropDrilling from './Hooks/PropDrilling.jsx'
import Context from './Hooks/Context.jsx'
import Effect from './Hooks/Effect.jsx'
import Ref from './Hooks/Ref.jsx'
import ButtonClick from './ButtonClick.jsx'
import FormHOC from './FormHOC.jsx'

function App() {
    // const employee = [
    //   { id: 12345, name: 'Siva', phone: 7418876453, salary: 30000, location: 'Chennai' },
    //   { id: 12234, name: 'Arun', phone: 7418337656, salary: 30000, location: 'Delhi' }
    // ]
      return (
        <div>
          {/* <FunctionalComponent details={employee}></FunctionalComponent> */}
          {/* <ClassComponent data={employee}></ClassComponent> */}
          {/* <Demo name="Siva"></Demo> */}
          {/* <Ref></Ref> */}
          {/* <Button></Button>
          <SignUpForm></SignUpForm>
          <Uncontrolled></Uncontrolled>
          <PropDrilling></PropDrilling>
          <Context></Context>
          <Effect></Effect> */}
          <ButtonClick></ButtonClick>
          <FormHOC></FormHOC>
        </div>
  )
}

export default App

