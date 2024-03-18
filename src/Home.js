import {React , useState} from "react";
import Table from "./components/Table";

function Home() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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
      } else {
        alert("The task already exists !!! ");
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
      <Table tasks={tasks} onDelete={handleDeleteTask} onEdit={handleAddTask} /> 
    </div>
  );
}

export default Home;
