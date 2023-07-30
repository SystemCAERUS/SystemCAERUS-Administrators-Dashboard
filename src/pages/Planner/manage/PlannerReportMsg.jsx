import React from "react";
import "./plannerReport.scss";

function ReportMsg(props) {
  
  return (
    <div className="issue-container">
      <tr>
        <td className="issueID"># {props.issueID}</td>
        <td className={`issueMsg ${props.issuePrio === 1 ? "issuePrio-1" : props.issuePrio === 0 ? "issuePrio-0" : props.issuePrio === 2 ? "issuePrio-2" : ""}`}>
          {props.issueMsg}
        </td>
        <td className="issueMachineName">{props.issueMachineName}</td>
        <td className="issuePrio">{props.issuePrio}</td>
        <td className="issueDepartmentName">{props.issueDepartmentName}</td>
        <td className="issueExpData">{props.issueExp}</td>
        
      </tr>
    </div>
  );
}

export default ReportMsg;