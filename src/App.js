import { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [inputFields, setInputFields] = useState([
    {
      id: 1,
      value: "",
    },
  ]);

  const handleExtendTasks = () => {
    const addTask = [...inputFields];
    addTask.push({
      id: addTask.length + 1,
      value: "",
    });
    setInputFields(addTask);
  };

  const handleInputChange = (id, value) => {
    const newInputFields = inputFields.map((field) =>
      field.id === id
        ? {
            ...field,
            value,
          }
        : field
    );
    setInputFields(newInputFields);
  };

  const handleAddTask = () => {
  const newTask = inputFields.map((field) => field.value.trim()).join("\n○ ");
  if (newTask.trim() !== "") {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { value: "○ " + newTask };
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { value: "○ " + newTask }]);
    }
    setInputFields([{ id: 1, value: "" }]);
  }
};
  const handleEditButton = (index, task) => {
    const editedInputFields = inputFields.map((field, idx) =>
    idx === index ? { id: field.id, value: task.value } : field
  );
  setInputFields(editedInputFields);

  // Set the edit index to the index of the task
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
          <h1> ToDo List Web Application </h1>{" "}
        </div>{" "}
        {inputFields.map((field) => (
          <div key={field.id} className="input-text">
            <input
              placeholder="Enter the task"
              className="input"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
            />{" "}
          </div>
        ))}{" "}
        <div className="div-plus-btn">
          <button
            type="submit"
            className="plus-btn"
            onClick={handleExtendTasks}
          >
            +
          </button>{" "}
        </div>{" "}
        <div>
          <button className="input-btn" onClick={handleAddTask}>
            {" "}
            {editIndex !== null ? "Edit Task" : "Add"}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div>
        <Table
          tasks={tasks}
          onDelete={handleDeleteTask}
          onEdit={handleEditButton}
        />{" "}
      </div>{" "}
    </div>
  );
}

export default App;
