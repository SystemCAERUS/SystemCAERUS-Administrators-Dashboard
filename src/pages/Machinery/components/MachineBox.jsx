import React from "react";
import "./machineBox.scss";

function MachineBox(props) {
  return (
    <div className="machineBoxContent">
      <div className="machineBoximage">
        <img src={props.image} alt="" className="machineImage" />
      </div>
      <div className="machineContent">
        <div className="machineBoxName">{props.name}<span className="machineBoxUnique"># {props.uniqueName}</span></div>
        <div className="machineBoxDepartment">{props.department}</div>
        <div className="machineBoxDescription">{props.description}</div>
        <div className="machineBoxURL">{props.URL}</div>
      </div>
    </div>
  );
}

export default MachineBox;
