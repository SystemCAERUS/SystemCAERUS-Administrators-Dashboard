import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./manage.scss"

function UpdateEquipmentForm() {
  const history = useHistory();
  const [repairs, setRepairs] = useState([]);
  const [equipmentName, setEquipmentName] = useState("");
  const [departmentID, setDepartmentId] = useState("");
  const [machineID, setMachineID] = useState("");
  const [desIssue, setHandleDesIssue] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [departments, setDepartments] = useState([]);
  const [machines, setMachines] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shopName, setShopName] = useState("");
  const [givenDate, setGivenDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedID, setSelectedID] = useState("");
  const filteredData = repairs.filter((item) => item.status === 1);

  useEffect(() => {
    const fetchedRepairs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/repairs");
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

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleShopName = (e) => {
    setShopName(e.target.value);
  };

  const handleGivenDateChange = (e) => {
    setGivenDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedID(selectedValue);
  };

  const validateForm = () => {
    const errors = {};

    if (!equipmentName.trim() || !departmentID.trim() || !desIssue.trim()) {
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

    const requestBody = {
      equipmentName: equipmentName,
      desIssue: desIssue,
      shopName: shopName,
      phoneNumber: phoneNumber,
      givenDate: givenDate,
      returnDate: returnDate,
      departmentID: departmentID,
      machineID: machineID,
      selectedID:selectedID,
    };

    axios
      .put("http://localhost:8800/repairs", requestBody)
      .then((res) => {
        console.log(res);
        console.log(equipmentName);
        console.log(desIssue);
        console.log(shopName);
        console.log(phoneNumber);
        console.log(givenDate);
        console.log(returnDate);
        console.log(departmentID);
        console.log(machineID);
        history.push("/equipment");
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
                Add New Equipment to Repair Section
              </span>
            </div>
            <div className="machine-form">
              {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}
              <div className="update-equip">
                <select
                  value={selectedID}
                  onChange={handleDropdownChange}
                  className="open-issue-dropdown"
                >
                  <option value="">Select Repair Part You wish to close</option>
                  {filteredData.map((item) => (
                    <option key={item.repairid} value={item.repairid}>
                      {"Repair Part name --> " +
                        item.partname +
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
              </div>
              <input
                type="text"
                onChange={handleEquipmentName}
                value={equipmentName}
                placeholder="Please enter the Equipment Part Name"
                className="input-machine-name"
              />
              <input
                type="text"
                onChange={handleDesIssue}
                value={desIssue}
                placeholder="Please Enter the Description about the Issue"
                className="input-unique-name"
              />
              <input
                type="text"
                onChange={handleShopName}
                value={shopName}
                placeholder="Please Enter the Repair Place Name"
                className="input-unique-name"
              />
              <input
                type="text"
                onChange={handlePhoneNumber}
                value={phoneNumber}
                placeholder="Please Enter the Phone number of Repair Place"
                className="input-unique-name"
              />
              <div>
                <tr>
                  <td>
                    <label htmlFor="">Given Date</label>
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
              <div>
                <tr>
                  <td>
                    <label htmlFor="">Return Date</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={handleReturnDateChange}
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
              <button className="machine-button" onClick={handleUpload}>
                Update Repair Equipment 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEquipmentForm;
