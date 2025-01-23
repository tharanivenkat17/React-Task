import React, { Suspense } from 'react'
import Button from './Button.jsx'
import SignUpForm from './Forms/SignUpForm.jsx'
import Uncontrolled from './Forms/Uncontrolled.jsx'
import PropDrilling from './Hooks/PropDrilling.jsx'
import Context from './Hooks/Context.jsx'
import Effect from './Hooks/Effect.jsx'
import Ref from './Hooks/Ref.jsx'
import ButtonClick from './ButtonClick.jsx'
import FormHOC from './FormHOC.jsx'
import LazyLoading from './LazyLoading.jsx'
import ErrorBoundaries from './ErrorBoundaries.jsx'
import { ErrorBoundary } from 'react-error-boundary'

// const LazyLoadingComponent = React.lazy(()=>import("./LazyLoading.jsx"))
const ErrorFallBack =({error,resetErrorBoundary})=>{
  return(
    <>
      <p>Something went wrong!</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </>
  )
}
const [message, setMessage] = useState("")
  function handleSubmit(payload){
    setMessage(payload);
  }
function App() {

  
    // const employee = [
    //   { id: 12345, name: 'Siva', phone: 7418876453, salary: 30000, location: 'Chennai' },
    //   { id: 12234, name: 'Arun', phone: 7418337656, salary: 30000, location: 'Delhi' }
    // ]
      return (
        <div>
          {/*  ResetErrorBoundary */}
          {/* <ErrorBoundary FallbackComponent={ErrorFallBack}> 
          <ErrorBoundaries></ErrorBoundaries>
          </ErrorBoundary>*/}


          {/* fallbackRender */}
          {/* <ErrorBoundary fallbackRender={({error,resetErrorBoundary}) =>{
            return(
              <>
                <p>Something went wrong!</p>
                <p>{error.message}</p>
                <button onClick={resetErrorBoundary}>Try Again</button>
              </>
            )
          }}>
          <ErrorBoundaries></ErrorBoundaries>
          </ErrorBoundary> */}



          {/*  state recovery */}
        
            <h1>Do not type "crash"</h1>
            <h2>{message}</h2>
            <>
              <ErrorBoundary FallbackComponent={ErrorFallBack}>
                  <ErrorBoundaries></ErrorBoundaries>
              </ErrorBoundary>
            </>
        
          


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
          {/* <ButtonClick></ButtonClick>
          <FormHOC></FormHOC>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLoadingComponent></LazyLoadingComponent>
          </Suspense> */}
          
          
          
        </div>
  )
}

export default App

