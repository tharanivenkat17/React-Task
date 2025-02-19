import './App.css';
import Counter from './BasicTask/Counter';
import Form from './BasicTask/Form';
import HelloUser from './BasicTask/HelloUser';
import TodoList from './IntermediateTask.jsx/TodoList';
import Sample from './Sample';

function App() {
  const name = "Siva";
  return (
    <div>
      {/* <Sample />
      <h1> Basic Task </h1>
        <HelloUser name={name} />
        <Counter />
        <Form /> */}
      <h1> Intermadiate Task</h1>
        <TodoList />

    </div>
  );
}

export default App;
