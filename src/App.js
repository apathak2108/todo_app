import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './components/Login';
// import './components/Register';
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./Home";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

  // useEffect(() => {
  //   fetch('https://susan-hacker-solomon-alike.trycloudflare.com/api/1.0/feature/config')
  //   .then(response => response.json())
  //   .then(data => {
  //     setApiResponse(data);
  //   });
  // });

  const isEditable = apiResponse ? apiResponse.isEditable : false;

  const handleExtendTasks = () => {
    const addTask = [...inputFields];
    addTask.push({ id: addTask.length + 1, value: "" });
    setInputFields(addTask);
  };

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

  const handleDeleteOnFalse = (index) => {
    alert("You are not authorised to delete !");
  };

  const handleEditOnFalse = (index, task) => {
    alert("You are not authorised to edit !");
  };
  console.log(inputFields);
  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
      <div className="main-container">
        <div>
          <div className="heading">
            <h1>ToDo List Web Application</h1>
          </div>
          <div className="input-text">
            {inputFields.map((v, i) => (
              <div key={v.id} className="input-text">
                <div className="input-text">
                  <input
                    placeholder="Enter the task"
                    className="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
              </div>
            ))}
            <div className="div-plus-btn">
              <button
                type="submit"
                className="plus-btn"
                onClick={handleExtendTasks}
              >
                +
              </button>
            </div>
          </div>
          <button className="input-btn" onClick={handleAddTask}>
            {editIndex !== null ? "Edit Task" : "Add"}
          </button>
        </div>
        <div>
          {isEditable ? (
            <Table
              tasks={tasks}
              onDelete={handleDeleteTask}
              onEdit={handleEditButton}
            />
          ) : (
            <Table
              tasks={tasks}
              onDelete={handleDeleteTask}
              onEdit={handleEditButton}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default App;
