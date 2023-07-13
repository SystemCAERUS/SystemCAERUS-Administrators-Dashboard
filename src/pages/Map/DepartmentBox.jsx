import React from 'react'
import './departmentBox.scss'

function DepartmentBox(props) {
  return (
<div className="departmentBox-map">
      <tr className="tr-map-d">
        <td className="dept-ID">
            <div>#D{props.userid}</div>
        </td>
        <td className="dept-name">
          <div className="message">{props.name}</div>
        </td>
      </tr>
    </div>
  )
}

export default DepartmentBox
