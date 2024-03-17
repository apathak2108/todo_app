import { useState , useEffect } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    fetch('https://susan-hacker-solomon-alike.trycloudflare.com/api/1.0/feature/config')
    .then(response => response.json())
    .then(data => {
      setApiResponse(data);
    });
  });

  const isEditable = apiResponse ? apiResponse.isEditable : false;

  const handleAddTask = () => {
    if (input !== "") {
      if (!tasks.includes(input)) {
        if (editIndex !== null) {
          const updatedTasks = [...tasks];
          updatedTasks[editIndex] = input;
          setTasks(updatedTasks);
          setEditIndex(null);
        } else {
          setTasks([...tasks, input]);
        }
      }
      else {
        alert("The task already exists !!! ")
      }
    }
    setInput("");
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

  const handleDeleteOnFalse = (index) => {
    alert("You are not authorised to delete !")
  }

  const handleEditOnFalse = (index, task) => {
    alert("You are not authorised to edit !")
  }

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
        {(isEditable) ? 
        (<Table
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={handleEditButton}
      />) : <Table
      tasks={tasks}
      onDelete={handleDeleteOnFalse}
      onEdit={handleEditOnFalse} />}
      </div>
    </div>
  );
}
export default App;
