// import React, { StrictMode, Suspense, useState } from 'react'
import React from 'react'
// import SignUpForm from './Forms/SignUpForm.jsx'
// import Uncontrolled from './Forms/Uncontrolled.jsx'
// import PropDrilling from './Hooks/PropDrilling.jsx'
// import Context from './Hooks/Context.jsx'
// import Effect from './Hooks/Effect.jsx'
// import Ref from './Hooks/Ref.jsx'
// import ButtonClick from './HOC/ButtonClick.jsx'
// import FormHOC from './HOC/FormHOC.jsx'
// import LazyLoading from './ReactInDepth/LazyLoading.jsx'
// import ErrorBoundaries from './ReactInDepth/ErrorBoundary/ErrorBoundaries.jsx'
// import { ErrorBoundary } from 'react-error-boundary'
// import MessageError from './ReactInDepth/ErrorBoundary/MessageError.jsx'
// import Memo from './ReactInDepth/Optimization/Memo.jsx'
// import Callback from './ReactInDepth/Optimization/Callback.jsx'
// import Profilers from './ReactInDepth/Profilers.jsx'
// import Withoutjsx from './Sample/Withoutjsx.jsx'
// import CustomHook from './ReactInDepth/RenderProps/CustomHook.jsx'
// import RenderProps from './ReactInDepth/RenderProps/RenderProps.jsx'
// import Strict from './ReactInDepth/StrictMode.jsx'
// import UncontrolledComponent from './ReactInDepth/UncontrolledComponent.jsx'
// import UseState from './Hooks/UseState.jsx'
// import InsideCondition from './Hooks/RulesOfHooks/InsideCondition.jsx'
// import AfterCondition from './Hooks/RulesOfHooks/AfterCondition.jsx'
// import EventHandle from './Hooks/RulesOfHooks/EventHandle.jsx'
// import ClassComponent from './Hooks/RulesOfHooks/ClassComponent.jsx'
// import TryCatch from './Hooks/RulesOfHooks/TryCatch.jsx'
// import HookInsideHook from './Hooks/RulesOfHooks/HookInsideHook.jsx'
// import Counter from './Counter.jsx'
// import ColorChange from './ColorChange.jsx'
import Add from './Axios/Add.jsx'
import Display from './Axios/Display.jsx'
import Delete from './Axios/Delete.jsx'
import UpdateUser from './Axios/UpdateUser.jsx'

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
      {/* <UseState/> */}
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

      {/*             Strict Mode        */}
      {/* <StrictMode> */}
          {/* <Strict /> */}
      {/* </StrictMode> */}

      {/*             UncontrolledComponent        */}
      {/* <UncontrolledComponent/> */}

      {/*             Rules Of Hooks        */}
      {/* <InsideCondition/>
      <AfterCondition/>
      <EventHandle/>
      <ClassComponent/>
      <TryCatch/>
      <HookInsideHook/> */}

      {/*             Testing        */}
      {/* <Counter /> */}

      {/* <ColorChange /> */}

      {/*             Axios        */}
      <Add />
      <Delete />
      <UpdateUser />
      <div style={{paddingLeft: "48%",paddingTop: "2%"}}><Display /></div>
    </div>
  )
}

export default App