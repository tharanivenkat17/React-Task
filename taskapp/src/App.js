// import ThemeProvider from './AdvanceTask/ThemeToggle/ThemeContext';
// import ThemeToggle from './AdvanceTask/ThemeToggle/ThemeToggle';
// import Navigation from './IntermediateTask/Routing/Navigation';
// import FetchDataAPI from './IntermediateTask/FetchDataAPI';
// import Counter from './BasicTask/Counter';
// import Form from './BasicTask/Form';
// import HelloUser from './BasicTask/HelloUser';
// import TodoList from './IntermediateTask/TodoList';
// import Form from "./AdvanceTask/CustomHook/Form";
import Performance from "./AdvanceTask/Performance/Performance";


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
      <h1> Intermadiate Task</h1>
        <TodoList /> 
        <FetchDataAPI />
        <Navigation /> */}
      <h1> Advance Task</h1>
      {/* ------------------------- Theme Toggle ------------------------ */}
      {/* <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider> */}
      {/* ------------------------- Custom Hook ------------------------ */}
      {/* <Form /> */}
      {/* ------------------- Performance Optimization ------------------- */}
      <Performance />
    </div>
  );
}

export default App;
