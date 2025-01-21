import React from 'react'
import Button from './Button.jsx'
import SignUpForm from './Forms/SignUpForm.jsx'
import Uncontrolled from './Forms/Uncontrolled.jsx'

function App() {
    // const employee = [
    //   { id: 12345, name: 'Siva', phone: 7418876453, salary: 30000, location: 'Chennai' },
    //   { id: 12234, name: 'Arun', phone: 7418337656, salary: 30000, location: 'Delhi' }
    // ]
      return (
        <div>
          {/* <FunctionalComponent details={employee}></FunctionalComponent>
          <ClassComponent data={employee}></ClassComponent>
          <Demo name="Siva"></Demo> */}
          {/* <SignUpForm></SignUpForm> */}
          {/* <Button></Button> */}
          <SignUpForm></SignUpForm>
          <Uncontrolled></Uncontrolled>

        </div>
  )
}

export default App

