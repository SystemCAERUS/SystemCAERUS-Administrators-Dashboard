import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "./closeIssue.scss";
import { useHistory } from "react-router-dom";

function UpdateIssue() {
  const history = useHistory();
  const [breakdowns, setBreakdowns] = useState([]);
  const [selectedIssueID, setSelectedIssueID] = useState(null);
  const [issueDes,setIssueDes]=useState("");
  const [priority,setPriority]=useState("");
  const [sDepartment,setSelectedDepartments]=useState("");
  const [sMachine,setSelectedmachine]=useState("");


  const handleDropdownChange = (event) => {
    setSelectedIssueID(event.target.value);
  };

  const handleIssueDesChange = (event) => {
    setIssueDes(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleMachineChange = (event) => {
    setSelectedmachine(event.target.value)
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartments(event.target.value);
  };


  //fetch issues
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
  const filteredData = breakdowns.filter((item) => item.status === 1);


  //fetch departments
  const [allDepartment, setDepartments] = useState([]);
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
  const departments = allDepartment.filter((item) => item.hide === 0);


  //fetch machines
  const [machines, setMachines] = useState([]);
  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const res = await axios.get("http://localhost:8800/machines");
        setMachines(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMachines();
  }, []);
  const filteredMachines = machines.filter((item) => item.hideMachine === 0);


  //Validate form
  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    const errors = {};

    if (!selectedIssueID || !issueDes || !priority || !sDepartment || !sMachine) {
      errors.form =
        "Please Enter All details Correclty";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  //Update issues
  const handleClose = () => {
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    const formdata = new FormData();
    formdata.append("issueID", selectedIssueID);
    formdata.append("issueDes", issueDes);
    formdata.append("priority", priority);
    formdata.append("dep", sDepartment);
    formdata.append("machine", sMachine);

    axios
      .put("http://localhost:8800/issues/update", formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        history.push("/issues");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                onChange={handlePriorityChange}
                name="priority"
                value={priority}
              >
                <option value="">Update Selected Priority</option>
                <option value={0}>Low Priority</option>
                <option value={1}>Avg Priority</option>
                <option value={2}>High Priority</option>
              </select>
              <select
                id="departments"
                className="open-issue-dropdown"
                value={sDepartment}
                onChange={handleDepartmentChange}
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
                value={sMachine}
                onChange={handleMachineChange}
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
                onChange={handleIssueDesChange}
                value={issueDes}
                placeholder="Please Enter the Updated Breakdown Description"
                className="input-machine-name"
              />
                                          {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}

              <button className="machine-button" onClick={handleClose}>
                UPDATE BREAKDOWN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateIssue;
