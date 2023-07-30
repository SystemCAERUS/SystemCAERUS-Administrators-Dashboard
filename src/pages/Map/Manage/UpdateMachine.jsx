import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./addMachine.scss";

function UpdateMachine() {
  const history = useHistory();
  const [file, setFile] = useState("");
  const [machineName, setMachineName] = useState("");
  const [departmentID, setDepartmentId] = useState("");
  const [uniqueName, setUniqueName] = useState("");
  const [departmentDes, setDepartmentDes] = useState("");
  const [URL, setURL] = useState("");
  const [smallDes, setSmallDes] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [departments, setDepartments] = useState([]);

  //machine data
  const [machines, setMachines] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const filteredData = machines.filter((item) => item.hideMachine === 0);

  useEffect(() => {
    const fetchedRepairs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/machines");
        setMachines(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedRepairs();
  }, []);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedID(selectedValue);
  };

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

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMachineName = (e) => {
    setMachineName(e.target.value);
  };

  const handleDepartmentID = (e) => {
    setDepartmentId(e.target.value);
  };

  const handleUniqueName = (e) => {
    setUniqueName(e.target.value);
  };

  const handleDepartmentDes = (e) => {
    setDepartmentDes(e.target.value);
  };

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  const handleSmallDes = (e) => {
    setSmallDes(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (
      !file ||
      !machineName.trim() ||
      !departmentID.trim() ||
      !uniqueName.trim() ||
      !departmentDes.trim() ||
      !URL.trim() ||
      !smallDes.trim()
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
    formdata.append("image", file);
    formdata.append("machinename", machineName);
    formdata.append("departmentid", departmentID);
    formdata.append("uniqueName", uniqueName);
    formdata.append("departmentdes", departmentDes);
    formdata.append("smallDes", smallDes);
    formdata.append("URL", URL);
    formdata.append("id",selectedID)

    console.log(formdata)

    axios
      .put("http://localhost:8800/machines", formdata)
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
              <span className="notification">Update Machine</span>
            </div>
            <div className="machine-form">
              {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}
              <div className="dip-dropdown" style={{width:'100%',marginTop:'-30px',marginBottom:'10px'}}>
                <select
                  value={selectedID}
                  onChange={handleDropdownChange}
                  className="open-issue-dropdown"
                >
                  <option value="">
                    Select Machine you wish to remove from system
                  </option>
                  {filteredData.map((item) => (
                    <option key={item.machineid} value={item.machineid}>
                      {"Machine name --> " +
                        item.machinename +
                        "\u00A0 | \u00A0" +
                        "Department --> " +
                        item.departmentname}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                onChange={handleMachineName}
                value={machineName}
                placeholder="Please enter the Machine name    (Ex: Bosch)"
                className="input-machine-name"
              />
              <input
                type="text"
                onChange={handleUniqueName}
                value={uniqueName}
                placeholder="Please Enter the Unique Machine name/ID    (Ex: #TURS45)"
                className="input-unique-name"
              />
              <input
                type="text"
                onChange={handleSmallDes}
                value={smallDes}
                placeholder="Please Provide a Summary of the Machine     (Ex: Small Description)"
                className="input-small-des"
              />
              <input
                type="text"
                onChange={handleDepartmentDes}
                value={departmentDes}
                placeholder="Please Provide a In Detailed Description about the Machine"
                className="input-detailed-des"
              />
              <input
                type="text"
                onChange={handleURL}
                value={URL}
                placeholder="Please Enter URL of the Website or Documentation to the Machine"
                className="input-URL"
              />
              <input
                type="file"
                onChange={handleFile}
                className="input-file-machine"
              />
              {/*}
              <input
                type="text"
                onChange={handleDepartmentID}
                value={departmentID}
                placeholder="Department ID"
                className="input-department-id"
              />*/}
              <div className="pikers">
                <select
                  id="departments"
                  className="dropdown"
                  value={departmentID}
                  onChange={handleDepartmentID}
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
              <button className="machine-button" onClick={handleUpload}>
                Add New Machine
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateMachine;
