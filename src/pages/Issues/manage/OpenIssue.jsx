import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./openIssue.scss";
import Predict from "../Predict";

function OpenIssue() {
  const history = useHistory();

  const [issues, setIssues] = useState({
    issueTitle: "",
    issueDesc: "",
    priority: null,
    departmentID: null,
    machineID: null,
  });

  const [errors, setErrors] = useState({
    issueTitle: "",
    issueDesc: "",
    priority: "",
    departmentID: "",
    machineID: "",
  });

  function handleChange(e) {
    if (e.target.name === "priority") {
      setIssues((prev) => ({ ...prev, priority: parseInt(e.target.value) }));
    } else {
      setIssues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  async function handleClick(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const updatedIssues = {
        ...issues,
      };

      try {
        console.log(updatedIssues);
        await axios.post("http://localhost:8800/issues", updatedIssues);
        history.push("/issues");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  }

  function validateForm() {
    const errors = {};

    if (issues.issueTitle.trim() === "") {
      errors.issueTitle = "Please enter the title of the issues.";
    }

    if (issues.issueDesc.trim() === "") {
      errors.issueDesc = "Please enter the issues description.";
    }

    if (issues.priority === null) {
      errors.priority = "Priority is missing";
    }

    if (issues.departmentID === null) {
      errors.priority = "Please select Department";
    }

    if (issues.machineID === null) {
      errors.priority = "Please select Machine";
    }

    return errors;
  }

  //this deal with machines and department
  const [machines, setMachines] = useState([]);
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

  //this deal with searching logic
  const [filteredMachines, setFilteredMachines] = useState([]);
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
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="form">
            <h1 className="addTitle">OPEN BREAKDOWNS</h1>
            <div className="IssuesTitle">
              <label className="IssuesLabel">
                Please Enter the Breakdown Title :
                <h6>කරුණාකර බිඳවැටීම් මාතෘකාව මෙහි ඇතුළත් කරන්න</h6>
              </label>
              <input
                className="issueTitle"
                type="text"
                onChange={handleChange}
                name="issueTitle"
                value={issues.issueTitle}
                required
                placeholder={errors.issueTitle}
              />
            </div>
            <br />
            <div className="IssuesDesc">
              <label className="IssuesDescLabel">
                Please Enter the Description :
                <h6>කරුණාකර විස්තරය ඇතුලත් කරන්න</h6>
              </label>
              <textarea
                className="input-field"
                rows={3}
                name="issueDesc"
                value={issues.issueDesc}
                onChange={handleChange}
                required
                placeholder={errors.issueDesc && errors.issueDesc}
              ></textarea>
            </div>
            <br />
            <div className="twoPickers">
              <div className="pikers">
                <select
                  className="dropdown"
                  onChange={handleChange}
                  name="priority"
                  value={issues.priority}
                >
                  <option value="">Select Priority</option>
                  <option value={0}>Low Priority</option>
                  <option value={1}>Avg Priority</option>
                  <option value={2}>High Priority</option>
                </select>
                <br />
              </div>
              <div className="pikers">
                <select
                  id="departments"
                  className="dropdown"
                  value={issues.departmentID}
                  onChange={handleChange}
                  name="departmentID"
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.departmentname}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pikers" style={{ marginLeft: '100px' }}>
                <input
                  type="text"
                  placeholder="Search machine..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleMachineSearch(e.target.value);
                  }}
                />
                <select
                  id="departments"
                  className="dropdown"
                  value={issues.machineID}
                  onChange={handleChange}
                  name="machineID"
                >
                  <option value="">Select Machine</option>
                  {filteredMachines.map((machine) => (
                    <option key={machine.machineid} value={machine.machineid}>
                      {machine.machinename} # {machine.uniqueName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <br />
            <h4>
              {errors.value && <span className="error">{errors.value}</span>}
            </h4>
            <Predict/>
            <br />
            <button className="IssuesAddButtonAddPage" onClick={handleClick}>
              OPEN BREAKDOWN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenIssue;
