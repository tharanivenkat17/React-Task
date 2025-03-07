// import ThemeProvider from './AdvanceTask/ThemeToggle/ThemeContext';
// import ThemeToggle from './AdvanceTask/ThemeToggle/ThemeToggle';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './IntermediateTask/Routing/Navigation';
import { AuthProvider } from './AdvanceTask/Authentication/AuthContext';
// import FetchDataAPI from './IntermediateTask/FetchDataAPI';
// import Counter from './BasicTask/Counter';
// import Form from './BasicTask/Form';
// import HelloUser from './BasicTask/HelloUser';
import React from 'react';
import TodoList from './IntermediateTask/TodoList/TodoList';
// import Form from "./AdvanceTask/CustomHook/Form";
// import Performance from "./AdvanceTask/Performance/Performance";


function App() {
  // const name = "Siva";
  return (
    <div>
      {/* 
      <h1> Basic Task </h1>
        <HelloUser name={name} />
        <Counter />
        <Form /> */}
      {/* 
      <h1> Intermadiate Task</h1>*/}
        <TodoList /> 
        {/* <FetchDataAPI />  */}
      {/* <Navigation />  */}
      {/* <h1> Advance Task</h1> */}
      {/* ------------------------- Theme Toggle ------------------------ */}
      {/* <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider> */}
      {/* ------------------------- Custom Hook ------------------------ */}
      {/* <Form /> */}
      {/* ------------------- Performance Optimization ------------------- */}
      {/* <Performance /> */}
      {/* <AuthProvider>
        <Router>
          <Navigation />
        </Router>
      </AuthProvider> */}
    </div>
  );
}

export default App;
