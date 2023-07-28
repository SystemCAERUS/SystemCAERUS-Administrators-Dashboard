import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddPlannedForm() {
  const history = useHistory();
  const [equipmentName, setEquipmentName] = useState("");
  const [departmentID, setDepartmentId] = useState("");
  const [machineID, setMachineID] = useState("");
  const [desIssue, setHandleDesIssue] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [departments, setDepartments] = useState([]);
  const [machines, setMachines] = useState([]);
  const [givenDate, setGivenDate] = useState("");

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

  const handleEquipmentName = (e) => {
    setEquipmentName(e.target.value);
  };

  const handleDepartmentID = (e) => {
    setDepartmentId(e.target.value);
  };

  const handleMachineID = (e) => {
    setMachineID(e.target.value);
  };

  const handleDesIssue = (e) => {
    setHandleDesIssue(e.target.value);
  };

  const handleGivenDateChange = (e) => {
    setGivenDate(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (
      !equipmentName.trim() ||
      !departmentID.trim() ||
      !desIssue.trim() 
    ) {
      errors.form = "Please fill in all fields.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleUpload = () => {
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    const formdata = new FormData();
    formdata.append("equipmentName", equipmentName);
    formdata.append("departmentid", departmentID);
    formdata.append("desIssue", desIssue);
    formdata.append("machineID",machineID);
    formdata.append("plannedDate",givenDate);

    axios
      .post("http://localhost:8800/planner", formdata)
      .then((res) => {
        console.log(res);
        history.push("/machines");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">
                Add New Planned Task
              </span>
            </div>
            <div className="machine-form">
              {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}
              <input
                type="text"
                onChange={handleEquipmentName}
                value={equipmentName}
                placeholder="Please enter the Task Title"
                className="input-machine-name"
              />
              <input
                type="text"
                onChange={handleDesIssue}
                value={desIssue}
                placeholder="Please Enter the Description about the Task Title"
                className="input-unique-name"
              />
              <div>
                <tr>
                  <td>
                    <label htmlFor="">Planned Date</label>
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
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.departmentname}
                    </option>
                  ))}
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
                  {machines.map((machine) => (
                    <option key={machine.machineid} value={machine.machineid}>
                      {machine.machinename}
                    </option>
                  ))}
                </select>
              </div>
              <button className="machine-button" onClick={handleUpload}>
                Add New Planned Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPlannedForm;

