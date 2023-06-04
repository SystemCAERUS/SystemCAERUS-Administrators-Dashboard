import React from "react";
import "./employeeBox.scss";

function EmployeeBox(props) {
  return (
    <div className="empBox">
      <tr className="tr">
        <td className="userID">
            <div># {props.userid}</div>
        </td>
        <td className="date">
          <img className="imageEMP" src={props.imageURL} alt="" />
        </td>
        <td className="msg">
          <div className="message">{props.name}</div>
        </td>
        <td className="position">
          <div>{props.position}</div>
        </td>
        <td className="email">
          <div>{props.email}</div>
        </td>
        <td className="phone">
          <div>{props.phone}</div>
        </td>
      </tr>
    </div>
  );
}

export default EmployeeBox;
