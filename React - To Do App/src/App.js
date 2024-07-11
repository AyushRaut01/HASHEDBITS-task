import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  const addTask = () => {
    if (newTask.trim() === "") return;

    const updatedTasks = [...tasks, { text: newTask, completed: false }].sort();
    setTasks(updatedTasks);
    setNewTask("");
    inputRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{index + 1}. </span>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            {task.completed && <span>&#10003;</span>}
            <div className="task-buttons">
              {!task.completed && (
                <button onClick={() => completeTask(index)}>Complete</button>
              )}
              <button onClick={() => deleteTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;