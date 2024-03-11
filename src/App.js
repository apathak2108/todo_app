import './App.css';
import Table from './components/Table.js'

function App() {
  return (
    <div className="main-container">
      <div>
        <div>
          <h1>ToDo List Web Application</h1>
        </div>
        <div className='input-text'>
          <input placeholder='Enter the task' className='input'/>
        </div>
        <button type='submit' className='input-btn'>Add</button>
        
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default App;



      
      
      