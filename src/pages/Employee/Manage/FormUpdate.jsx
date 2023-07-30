import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./formAddEmployee.scss";

function UpdateIssue() {
  const history = useHistory();
  const [file, setFile] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeDes, setEmployeeDes] = useState("");
  const [optional, setOptional] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [selectedID, setSelectedID] = useState("");
  const [users, setUsers] = useState([]);
  const filteredDataUser = users.filter((item) => item.status === 1);

  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/employees");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedIssues();
  }, []);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value);
  };

  const handleDropdownChangeEmp = (event) => {
    const selectedID = event.target.value;
    console.log("Selected value:", selectedID);
    setSelectedID(selectedID);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDes = (e) => {
    setEmployeeDes(e.target.value);
  };

  const handleOptional = (e) => {
    setOptional(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (
      !file ||
      !employeeName.trim() ||
      !email.trim() ||
      !employeeDes.trim() ||
      !optional.trim() ||
      !phone.trim()
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
    formdata.append("employeeName", employeeName);
    formdata.append("email", email);
    formdata.append("employeeDes", employeeDes);
    formdata.append("phone", phone);
    formdata.append("optional", optional);
    formdata.append("jobID", selectedJobID);
    formdata.append("id",selectedID)

    axios
      .put("http://localhost:8800/employees", formdata)
      .then((res) => {
        console.log(res);
        history.push("/employees");
      })
      .catch((err) => console.log(err));
  };

  //This set of codes deal with the job positions
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedJobID(selectedValue);
  };

  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobID, setSelectedJobID] = useState("");
  const filteredData = jobPositions.filter((item) => item.positionHide === 1);

  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/positions");
        setJobPositions(res.data);
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
              <span className="notification">Update Employee Information</span>
            </div>
            <div className="machine-form">
              {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}
              <div className="emp-dropdown">
              <select
                value={selectedID}
                onChange={handleDropdownChangeEmp}
                className="open-issue-dropdown"
              >
                <option value="">
                  Please select the Employee name need to Update
                </option>
                {filteredDataUser.map((item) => (
                  <option key={item.userid} value={item.userid}>
                    {item.name}
                  </option>
                ))}
              </select>
              </div>
              <input
                type="text"
                onChange={handleEmployeeName}
                value={employeeName}
                placeholder="Please enter the Employee name "
                className="input-machine-name"
              />
              <input
                type="text"
                onChange={handleEmail}
                value={email}
                placeholder="Please Enter the Email of employee"
                className="input-unique-name"
              />
              <input
                type="text"
                onChange={handlePhone}
                value={phone}
                placeholder="Please Provide the Phone number of employee"
                className="input-small-des"
              />
              <input
                type="text"
                onChange={handleDes}
                value={employeeDes}
                placeholder="Please Provide a Description employee (Such as Talented Areas)"
                className="input-detailed-des"
              />
              <input
                type="text"
                onChange={handleOptional}
                value={optional}
                placeholder="Provide Extra Remarks   (Optional)"
                className="input-URL"
              />
              <select
                value={selectedJobID}
                onChange={handleDropdownChange}
                className="open-position-dropdown"
              >
                <option value="">Select Job Title</option>
                {filteredData.map((item) => (
                  <option key={item.positionID} value={item.positionID}>
                    {item.positionName}
                  </option>
                ))}
              </select>
              <input
                type="file"
                onChange={handleFile}
                className="input-file-machine"
              />
              <button className="machine-button" onClick={handleUpload}>
                Update Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateIssue;
