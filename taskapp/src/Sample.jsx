import React, { useState } from 'react';

function Sample() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the new task input field
  const [newTask, setNewTask] = useState('');

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);

      console.log(Date.now())
      setNewTask(''); // Clear the input field after adding
    }
  };

  // Function to handle task completion toggle
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // Function to handle removing a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      
      {/* Input field to add a new task */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <h2>Tasks:</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTaskCompletion(task.id)}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.text}
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent task completion toggle when clicking remove
              removeTask(task.id);
            }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sample;






