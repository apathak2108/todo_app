import { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const handleSubmit = () => {
    console.log(input);
    setInput("");
  };

  const handleAddTask = () => {
    if (input.trim() !== '')
      setTasks([...tasks, input]);
    setInput('');
  };
  

  return (
    <div className="main-container">
      <div>
        <div className="heading">
          <h1>ToDo List Web Application</h1>
        </div>
        <div className="input-text">
          <input
            placeholder="Enter the task"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button className="input-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div>
        <Table tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
