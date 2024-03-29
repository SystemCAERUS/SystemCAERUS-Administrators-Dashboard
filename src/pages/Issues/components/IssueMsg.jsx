import React from "react";
import "./IssueMsg.scss";

function IssueMsg(props) {
  return (
    <div className="issue-container">
      <tr>
        <td className="issueID"># {props.issueID}</td>
        <td className={`issueMsg ${props.issuePrio === 1 ? "issuePrio-1" : props.issuePrio === 0 ? "issuePrio-0" : props.issuePrio === 2 ? "issuePrio-2" : ""}`}>
          {props.issueMsg}
        </td>
        <td className="issueMachineName">{props.issueMachineName}</td>
        <td className="issueDepartmentName">{props.issueDepartmentName}</td>
        <td className="issueExpData">{props.issueExp}</td>
        <td className="issuePrio">
          {props.issuePrio === 0
            ? "Low"
            : props.issuePrio === 1
            ? "Avg"
            : "High"}
        </td>
      </tr>
    </div>
  );
}

export default IssueMsg;
