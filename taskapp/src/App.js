import ThemeToggle from './AdvanceTask/ThemeToggle';
import './App.css';
// import Navigation from './IntermediateTask/Routing/Navigation';
// import FetchDataAPI from './IntermediateTask/FetchDataAPI';
// import Counter from './BasicTask/Counter';
// import Form from './BasicTask/Form';
// import HelloUser from './BasicTask/HelloUser';
// import TodoList from './IntermediateTask/TodoList';

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
        <ThemeToggle />
    </div>
  );
}

export default App;
