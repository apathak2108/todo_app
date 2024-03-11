import React from 'react'
import './Table.css'
import Delete from "../../src/delete.png"
import Edit from "../../src/edit.png"

function Table() {
  return (
    <div className='task-table'>
      <table border='1' >
        <thead>
            <th>S. No.</th>
            <th>Pending tasks</th>
            <th>Action</th>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Make todo List</td>
                
                <td>
                    <img src={Delete} className='btn-img'></img>
                    <img src={Edit} className='btn-img'></img>
                </td>
                
            </tr>
            <tr>
                <td>1</td>
                <td>Make todo List</td>
                <td>
                    <img src={Delete} className='btn-img'></img>
                    <img src={Edit} className='btn-img'></img>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Make todo List</td>
                <td>
                    <img src={Delete} className='btn-img'></img>
                    <img src={Edit} className='btn-img'></img>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table