import React from 'react'
import "./plannerMsg.scss";

function PlannerMsg(props) {
  return (
    <div className='planner-container'>
      <tr>
        <td className="dueDate">{props.dueDate.substring(0, 10)}</td>
        <td className="todoMsg">{props.todoMsg}</td>
        <td className="todoMachineName">{props.todoMachineName}</td>
        <td className="todoDepartmentName">{props.todoDepartmentName}</td>
      </tr>
    </div>
  )
}

export default PlannerMsg
