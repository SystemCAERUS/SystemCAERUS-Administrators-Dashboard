import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "../../Map/general.scss";
import { useHistory } from "react-router-dom";

function HandlecloseRepair() {
  const history = useHistory();
  const [repairs, setRepairs] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const [securityCode, setSecurityCode] = useState("");
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

  //Validate form
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!(securityCode === "AJAJaj1999#@#@$$") || !selectedID || !closingRemark || !employees) {
      errors.form =
        "Please Enter all details correctly";
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
      selectedJobID: parseInt(selectedID),
      closingRemark: closingRemark,
      employees: employees,
    };

    axios
      .put("http://localhost:8800/planner", requestData)
      .then((res) => {
        console.log(res.data);
        console.log(selectedID)
        console.log(closingRemark)
        console.log(employees)
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
              <span className="notification">Close Planned Work</span>
            </div>
            <div className="issue-close-fields">
              <select
                value={selectedID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">Select Planned Task You wish to remove</option>
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
                placeholder="Employee names who finished this task (Ex: Janih, Lahiru)"
                className="input-machine-name"
              />
              <input
                type="text"
                onChange={handleClosingRemark}
                value={closingRemark}
                placeholder="Clsoing Remark of the Task"
                className="input-machine-name"
              />
              <label className="security-code">
                Security Code : &nbsp;&nbsp;&nbsp; AJAJaj1999#@#@$$
              </label>
              <input
                type="text"
                onChange={handleSecCode}
                value={securityCode}
                className="input-machine-name"
                placeholder="Please Enter Above Security Code"
              />
              {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}
              <button className="machine-button" onClick={handleClose}>
                Close Planned Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandlecloseRepair;
