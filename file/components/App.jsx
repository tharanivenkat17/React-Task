import React, { StrictMode, Suspense, useState } from 'react'
import SignUpForm from './Forms/SignUpForm.jsx'
import Uncontrolled from './Forms/Uncontrolled.jsx'
import PropDrilling from './Hooks/PropDrilling.jsx'
import Context from './Hooks/Context.jsx'
import Effect from './Hooks/Effect.jsx'
import Ref from './Hooks/Ref.jsx'
import ButtonClick from './HOC/ButtonClick.jsx'
import FormHOC from './HOC/FormHOC.jsx'
import LazyLoading from './LazyLoading.jsx'
import ErrorBoundaries from './ErrorBoundary/ErrorBoundaries.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import MessageError from './ErrorBoundary/MessageError.jsx'
import Memo from './Optimization/Memo.jsx'
import Callback from './Optimization/Callback.jsx'
import Profilers from './Profilers.jsx'
import Withoutjsx from './Withoutjsx.jsx'
import CustomHook from './RenderProps/CustomHook.jsx'
import RenderProps from './RenderProps/RenderProps.jsx'
import Sample from './StrictMode.jsx'


// const LazyLoadingComponent = React.lazy(()=>import("./LazyLoading.jsx"))

//////////////////////////  fallback  /////////////////////////

// const ErrorFallBack =({error,resetErrorBoundary})=>{
//   return(
//     <>
//       <p>Something went wrong!</p>
//       <p>{error.message}</p>
//       <button onClick={resetErrorBoundary}>Try Again</button>
//     </>
//   )
// }


//////////////////////// state recovery using resetErrorBoundary /////////////////////////////

// function ErrorFallBackState({ error, resetErrorBoundary }) {
//   return (
//       <div role="alert" style={{ color: "red" }}>
//           <h2>Something went wrong!</h2>
//           <p>{error.message}</p>
//           <button onClick={resetErrorBoundary}>Try Again</button>
//       </div>
//   );
// }


function App() {

  //////////////////////// state recovery using resetErrorBoundary /////////////////////////////
  // const [message, setMessage] = useState("")

  // const handleSubmit = (newMessage) => {
  //   setMessage(newMessage);
  // }

  // const employee = [
  //   { id: 12345, name: 'Siva', phone: 7418876453, salary: 30000, location: 'Chennai' },
  //   { id: 12234, name: 'Arun', phone: 7418337656, salary: 30000, location: 'Delhi' }
  // ]
  return (
    <div style={{ textAlign: "center" }}>
      {/*            state recovery using resetErrorBoundary            */}
      {/* <h1>state recovery using resetErrorBoundary</h1>
          <h2>Do not type "crash"</h2>
          <h3>{message}</h3>
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallBackState} 
              onReset={() => setMessage("")}>
              <MessageError message={message} onSubmit={handleSubmit} />
            </ErrorBoundary>
          </div>
      <br /> */}

      {/*             Fallback          */}
      {/* <h1>resetErrorBoundary using FallbackComponent</h1>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <ErrorBoundaries />
      </ErrorBoundary>
      <br /> */}

      {/*             fallbackRender               */}
      {/* <h1>fallbackRender</h1>
      <ErrorBoundary fallbackRender={({ error, resetErrorBoundary }) => {
        return (
          <>
            <p>Something went wrong!</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
          </>
        )
      }}>
        <ErrorBoundaries />
      </ErrorBoundary> 
      <br /> */}


      {/* <FunctionalComponent details={employee}></FunctionalComponent>
          <ClassComponent data={employee}></ClassComponent> */}
      {/* <Demo name="Siva"></Demo> */}

      {/*                   FORMS                  */}
      {/* <SignUpForm/>
          <Uncontrolled/> */}

      {/*                   HOOKS                  */}
      {/* <Ref/>
          <PropDrilling/>
          <Context/>
          <Effect/>  */}

      {/*               HIGHER ORDER COMPONENT         */}
      {/* <ButtonClick/>
          <FormHOC/> */}

      {/*             LazyLoadingComponent         */}
      {/* <Suspense fallback={<div>Loading...</div>}>
            <LazyLoadingComponent/>
          </Suspense> */}

      {/*            BUTTON and FRAGMENT           */}
      {/* <Button/> */}

      {/*             Optimizing Performance           */}
      {/* <Memo/> */}
          {/* <Callback/> */}

      {/*             Render Props            */}
      {/* <CustomHook /> */}
      {/* <RenderProps /> */}

      {/*             Profiler            */}
      {/* <Profilers /> */}

      {/*             Without JSX            */}
      {/* <Withoutjsx /> */}

      {/*             Static Type Checking - Flow        */}
      {/* <Flows /> */}

      <StrictMode>
          <Sample />
      </StrictMode>
      
    </div>
  )
}

export default App