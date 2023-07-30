import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "../../Map/general.scss";
import { useHistory } from "react-router-dom";

function UpdatePlannedTask() {
  const history = useHistory();
  const [departments, setDepartments] = useState([]);
  const [machines, setMachines] = useState([]);
  const [departmentID, setDepartmentId] = useState("");
  const [machineID, setMachineID] = useState("");
  const [repairs, setRepairs] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [givenDate, setGivenDate] = useState("");
  const filteredData = repairs.filter((item) => item.status === 1);
  const [employees, setEmployees] = useState("");
  const [closingRemark, setClosingRemark] = useState("");

  useEffect(() => {
    const fetchedRepairs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/planner");
        setRepairs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedRepairs();
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axios.get("http://localhost:8800/departments");
        setDepartments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDepartments();
  }, []);

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

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedID(selectedValue);
  };

  const handleSecCode = (e) => {
    setSecurityCode(e.target.value);
  };

  const handleClosingRemark = (e) => {
    setClosingRemark(e.target.value);
  };

  const handleEmployees = (e) => {
    setEmployees(e.target.value);
  };

  const handleDepartmentID = (e) => {
    setDepartmentId(e.target.value);
  };

  const handleMachineID = (e) => {
    setMachineID(e.target.value);
  };

  const handleGivenDateChange = (e) => {
    setGivenDate(e.target.value);
  };

  //Validate form
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!selectedID || !closingRemark || !employees) {
      errors.form = "Please Enter all details correctly";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  //Submit close breakdown
  const handleClose = () => {
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    const requestData = {
      selectedID: parseInt(selectedID),
      description: closingRemark,
      title: employees,
      departmentID: departmentID,
      machineID: machineID,
      date : givenDate,
    };

    axios
      .put("http://localhost:8800/planner/update", requestData)
      .then((res) => {
        console.log(res.data);
        console.log(selectedID);
        console.log(closingRemark);
        console.log(employees);
        console.log(machineID)
        console.log(givenDate)
        console.log(departmentID)
        history.push("/planner");
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
              <span className="notification">Update Planned Work</span>
            </div>
            <div className="issue-close-fields">
              <select
                value={selectedID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">Select Planned Task You want to Update</option>
                {filteredData.map((item) => (
                  <option key={item.todoID} value={item.todoID}>
                    {"Planned Task --> " +
                      item.msg +
                      "\u00A0" +
                      "  |  " +
                      "\u00A0" +
                      " ( Machine name: " +
                      item.machinename +
                      "  /  " +
                      " Department name: " +
                      item.departmentname +
                      " )"}
                  </option>
                ))}
              </select>
              <input
                type="text"
                onChange={handleEmployees}
                value={employees}
                placeholder="Please enter Updated Planned Task Title"
                className="input-machine-name"
              />
              <input
                type="text"
                onChange={handleClosingRemark}
                value={closingRemark}
                placeholder="Please enter description about planned task"
                className="input-machine-name"
              />
              <div>
                <tr>
                  <td>
                    <label htmlFor="" className="planned-date-label">
                      Updated Date :
                    </label>
                  </td>
                  <td>
                    <input
                      type="date"
                      value={givenDate}
                      onChange={handleGivenDateChange}
                      className="input-date"
                    />
                  </td>
                </tr>
              </div>

              <div className="pikers">
                <select
                  id="departments"
                  className="dropdown"
                  value={departmentID}
                  onChange={handleDepartmentID}
                  name="departmentID"
                >
                  <option value="">Please Select the Department</option>
                  {departments.map((department) =>
                    department.hide === 0 ? (
                      <option key={department.id} value={department.id}>
                        {department.departmentname}
                      </option>
                    ) : null
                  )}
                </select>
              </div>
              <div className="pikers">
                <select
                  id="departments"
                  className="dropdown"
                  value={machineID}
                  onChange={handleMachineID}
                  name="departmentID"
                >
                  <option value="">Please Select the Machine</option>
                  {machines.map((machine) =>
                    machine.hideMachine === 0 ? (
                      <option key={machine.machineid} value={machine.machineid}>
                        {machine.machinename}
                      </option>
                    ) : null
                  )}
                </select>
              </div>
              {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}
              <button className="machine-button" onClick={handleClose}>
                Update Planned Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePlannedTask;
