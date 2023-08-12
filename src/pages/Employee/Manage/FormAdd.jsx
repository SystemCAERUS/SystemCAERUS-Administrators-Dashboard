import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./formAddEmployee.scss"

function UpdateIssue() {
  const history = useHistory();
  const [file, setFile] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeDes, setEmployeeDes] = useState("");
  const [optional, setOptional] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value);
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

    //Regx codes to validate email and password
    if (
      !file ||
      !employeeName.trim() ||
      !email.trim() || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ||
      !employeeDes.trim() ||
      !optional.trim() ||
      !phone.trim() || phone.length !==10 || !/^[0-9]{10}$/.test(phone)
    ) {
      errors.form = "Please fill in all fields Correctly, Check the Phone number and Email in the valid Format";
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

    axios
      .post("http://localhost:8800/employees", formdata)
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
  const [selectedJobID, setSelectedJobID] = useState('');
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
              <span className="notification">Add Employee</span>
            </div>
            <div className="machine-form">
              {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}
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
                Add New Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateIssue;
