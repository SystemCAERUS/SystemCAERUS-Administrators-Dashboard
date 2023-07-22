import React from "react";
import "./machineBox.scss";

function MachineBox(props) {
  return (
    <div className="machineBoxContent">
      <div className="machineBoximage">
        <img src={"http://localhost:8800/"+props.image} alt="" className="machineImage" />
      </div>
      <div className="machineContent">
        <div className="machineBoxName">
          {props.name}
          <span className="machineBoxUnique"># {props.uniqueName}</span>
          <span className="machineBoxDepartment">( Department is {props.department} )</span>
        </div>
        <div className="machineBoxDescription">{props.description}</div>
      </div>
    </div>
  );
}

export default MachineBox;
