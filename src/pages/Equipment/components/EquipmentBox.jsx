import React from "react";
import "./Eqiuipmentbox.scss";

function Msg(props) {
  return (
    <div className="table-container">
      <tr>
        <td className="givendate">{props.givendate.substring(0, 10)}</td>
        <td className="repairdate">{props.returndate.substring(0, 10)}</td>
        <td className="repairname">{props.partName}</td>
        <td className="mNameData">{props.machineName}</td>
        <td className="dNameData">{props.dpartmentName}</td>
      </tr>
    </div>
  );
}

export default Msg;
