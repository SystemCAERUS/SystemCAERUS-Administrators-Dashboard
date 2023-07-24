import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "./closeIssue.scss";

function UpdateIssue() {
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

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const res = await axios.get("http://localhost:8800/departments");
        setDepartments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMachines();
  }, []);


  const [filteredMachines, setFilteredMachines] = useState([]);
  const [machines, setMachines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleMachineSearch(searchTerm) {
    const filtered = machines.filter(
      (machine) =>
        machine.machinename.toLowerCase().includes(searchTerm.toLowerCase()) ||
        machine.uniqueName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMachines(filtered);
  }

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const res = await axios.get("http://localhost:8800/machines");
        setMachines(res.data);
        setFilteredMachines(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMachines();
  }, []);

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">UPDATE BREAKDOWN DETAILS</span>
            </div>
            <div className="issue-close-fields">
              <select
                value={selectedIssueID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">SELECT AN ISSUE TO UPDATE</option>
                {filteredData.map((item) => (
                  <option key={item.issueID} value={item.issueID}>
                    {item.des}
                  </option>
                ))}
              </select>
              <select
                className="open-issue-dropdown"
                //onChange={handleChange}
                //name="priority"
                //value={issues.priority}
              >
                <option value="">Update Selected Priority</option>
                <option value={0}>Low Priority</option>
                <option value={1}>Avg Priority</option>
                <option value={2}>High Priority</option>
              </select>
              <select
                id="departments"
                className="open-issue-dropdown"
                // value={issues.departmentID}
                // onChange={handleChange}
                name="departmentID"
              >
                <option value="">Update Selected Department</option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.departmentname}
                  </option>
                ))}
              </select>
              <select
                id="departments"
                className="open-issue-dropdown"
               // value={issues.machineID}
               // onChange={handleChange}
                name="machineID"
              >
                <option value="">Update Selected Machine</option>
                {filteredMachines.map((machine) => (
                  <option key={machine.machineid} value={machine.machineid}>
                    {machine.machinename} # {machine.uniqueName}
                  </option>
                ))}
              </select>
              <input
                type="text"
                //onChange={handleMachineName}
                //value={machineName}
                placeholder="Please Enter the Updated Breakdown Description"
                className="input-machine-name"
              />

              {selectedIssueID && <p>Selected Issue ID: {selectedIssueID}</p>}
              <button className="machine-button">CLOSE BREAKDOWN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateIssue;
