import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "./closeIssue.scss";

function CloseIssue() {
  const [breakdowns, setBreakdowns] = useState([]);
  const [selectedIssueID, setSelectedIssueID] = useState(null);

  const filteredData = breakdowns.filter((item) => item.status === 1);

  const handleDropdownChange = (event) => {
    setSelectedIssueID(event.target.value);
  };

  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/issues");
        setBreakdowns(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedIssues();
  }, []);

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">Close Breakdown</span>
            </div>
            <div className="issue-close-fields">
              <select
                value={selectedIssueID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">Select an Issue to Close</option>
                {filteredData.map((item) => (
                  <option key={item.issueID} value={item.issueID}>
                    {item.des}
                  </option>
                ))}
              </select>
              <input
                type="text"
                //onChange={handleMachineName}
                //value={machineName}
                placeholder="Please Enter the Closing Remark"
                className="input-machine-name"
              />
              <input
                type="text"
                //onChange={handleMachineName}
                //value={machineName}
                placeholder="Please enter the Detailed Description about the breakdown"
                className="input-machine-name"
              />
              <input
                type="text"
                //onChange={handleUniqueName}
                //value={uniqueName}
                placeholder="Please Enter the Breakdown Duration"
                className="input-unique-name"
              />
              <input
                type="text"
                //onChange={handleSmallDes}
                //value={smallDes}
                placeholder="Employee's names who finished the Task    (Ex: Janith,Kavindu,Lahiru...)"
                className="input-small-des"
              />
              <input
                type="text"
                //onChange={handleUniqueName}
                //value={uniqueName}
                placeholder="ABNORMALITY"
                className="input-unique-name"
              />
              <input
                type="text"
                //onChange={handleSmallDes}
                //value={smallDes}
                placeholder="CONTAMINATION"
                className="input-small-des"
              />
              <input
                type="text"
                //onChange={handleSmallDes}
                //value={smallDes}
                placeholder="HARD TO ACESS TO"
                className="input-small-des"
              />
              {selectedIssueID && <p>Selected Issue ID: {selectedIssueID}</p>}
              <button className="machine-button" >
                CLOSE BREAKDOWN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseIssue;
