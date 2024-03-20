import React from "react";
import "./Table.css";
import Delete from "../../src/delete.png";
import Edit from "../../src/edit.png";

function Table({ tasks, onDelete, onEdit }) {
  const curr_date = () => {
    const date = new Date();
    return date.toDateString();
  }

  const curr_time = () => {
    const time = new Date();
    const current_time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return current_time;
  }

  return (
    <div className="task-table">
      <table>
        <thead className="thead">
          <th>S. No.</th>
          <th>Date</th>
          <th>Time</th>
          <th>Pending tasks</th>
          <th>Action</th>
        </thead>
        <tbody className="tbody">
          {tasks?.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{curr_date()}</td>
              <td>{ curr_time() }</td>
              <td>{task?.value}</td>
              <td>
                <img
                  src={Delete}
                  className="btn-img"
                  onClick={() => onDelete(index)}
                />
                <img
                  src={Edit}
                  className="btn-img"
                  onClick={() => onEdit(index, task)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
