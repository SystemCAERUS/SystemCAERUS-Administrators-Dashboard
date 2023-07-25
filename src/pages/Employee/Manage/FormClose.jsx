import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "../../Map/general.scss";
import { useHistory } from "react-router-dom";

function CloseEmployee() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [selectedID, setSelectedID] = useState('');
  const [securityCode, setSecurityCode] = useState("");
  const filteredData = users.filter((item) => item.status === 1);

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

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedID(selectedValue);
  };

  const handleSecCode = (e) => {
    setSecurityCode(e.target.value);
  };

  //Validate form
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!(securityCode === "SJNY19998#@#@$$") || !selectedID) {
      errors.form = "Please Select Job Position and Enter Security Code correctly";
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
      id: parseInt(selectedID),
    };

    axios
      .put("http://localhost:8800/employees/remove", requestData)
      .then((res) => {
        console.log(res.data);
        history.push("/employees");
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
              <span className="notification">Remove Employee</span>
            </div>
            <div className="issue-close-fields">
              <select
                value={selectedID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">Please select the Employee name need to remove</option>
                {filteredData.map((item) => (
                  <option key={item.userid} value={item.userid}>
                    {item.name}
                  </option>
                ))}
              </select>
              <label className="security-code">Security Code : &nbsp;&nbsp;&nbsp; SJNY19998#@#@$$</label>
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
              <button className="machine-button" onClick={handleClose}>Remove Employee</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseEmployee;
