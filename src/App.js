import { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const handleAddTask = () => {
    if (input.trim() !== '') {
      if (editIndex !== null) { 
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = input;
        setTasks(updatedTasks);
        setEditIndex(null); 
      } else {
        setTasks([...tasks, input]); 
      }
    }
    setInput('');
  };

  const handleEditButton = (index, task) => {
    setInput(task); 
    setEditIndex(index); 
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
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
          {editIndex !== null ? "Edit Task" : "Add"} 
        </button>
      </div>
      <div>
        <Table tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditButton}/>
      </div>
    </div>
  );
}
export default App;
