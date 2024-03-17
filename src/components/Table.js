import React from "react";
import "./Table.css";
import Delete from "../../src/delete.png";
import Edit from "../../src/edit.png";

function Table({ tasks, onDelete, onEdit }) {
  return (
    <div className="task-table">
      <table>
        <thead className="thead">
          <th>S. No.</th>
          <th>Pending tasks</th>
          <th>Action</th>
        </thead>
        <tbody className="tbody">
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task}</td>
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
