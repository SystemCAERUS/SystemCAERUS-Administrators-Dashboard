import React from "react";
import './IssueMsg.scss'

function IssueMsg(props) {
  return (
    <div className="issue-container">
      <tr>
        <td className="issueID"># {props.issueID}</td>
        <td className={`issueMsg ${props.issuePrio === 1 ? 'issuePrio-1' : ''}`}>{props.issueMsg}</td>
        <td className="issueMachineName">{props.issueMachineName}</td>
        <td className="issueDepartmentName">{props.issueDepartmentName}</td>
        <td className="issueExpData">{props.issueExp}</td>
        <td className="issuePrio">{props.issuePrio  === 1 ? 'High' : 'Avg'}</td>
      </tr>
    </div>
  );
}

export default IssueMsg;
