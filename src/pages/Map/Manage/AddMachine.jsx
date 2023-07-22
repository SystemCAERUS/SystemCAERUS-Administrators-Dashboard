import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddMachine() {
  const history = useHistory();
  const [file, setFile] = useState("");
  const [machineName, setMachineName] = useState("");
  const [departmentID, setDepartmentId] = useState("");
  const [uniqueName, setUniqueName] = useState("");
  const [departmentDes, setDepartmentDes] = useState("");
  const [URL, setURL] = useState("");
  const [smallDes, setSmallDes] = useState("");
  const [formErrors, setFormErrors] = useState({});

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

    if (!file || !machineName.trim() || !departmentID.trim() || !uniqueName.trim() || !departmentDes.trim() || !URL.trim() || !smallDes.trim()) {
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

    axios
      .post("http://localhost:8800/machines", formdata)
      .then((res) => {
        console.log(res);
        history.push("/map");
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
              <span className="notification">Add Machine</span>
            </div>
            {formErrors.form && <p style={{ color: "red" }}>{formErrors.form}</p>}
            <input type="file" onChange={handleFile} />
            <input type="text" onChange={handleMachineName} value={machineName} placeholder="Machine Name" />
            <input type="text" onChange={handleDepartmentID} value={departmentID} placeholder="Department ID" />
            <input type="text" onChange={handleUniqueName} value={uniqueName} placeholder="Unique Name" />
            <input type="text" onChange={handleDepartmentDes} value={departmentDes} placeholder="Department Description" />
            <input type="text" onChange={handleSmallDes} value={smallDes} placeholder="Small Description" />
            <input type="text" onChange={handleURL} value={URL} placeholder="URL" />
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMachine;
