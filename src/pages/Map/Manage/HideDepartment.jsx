import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "../../Map/general.scss";
import { useHistory } from "react-router-dom";

function HandleHideDepartment() {
  const history = useHistory();
  const [repairs, setRepairs] = useState([]);
  const [selectedID, setSelectedID] = useState('');
  const [securityCode, setSecurityCode] = useState("");
  const filteredData = repairs.filter((item) => item.hide === 0);

  useEffect(() => {
    const fetchedRepairs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/departments");
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

  //Validate form
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!(securityCode === "AJAJaj19998#@#@$$") || !selectedID) {
      errors.form = "Please Select Repair Part and Enter Security Code correctly";
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
      .put("http://localhost:8800/departments", requestData)
      .then((res) => {
        console.log(res.data);
        history.push("/map");
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
              <span className="notification">Remove Department from the System</span>
            </div>
            <div className="issue-close-fields">
              <select
                value={selectedID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">Select Department you wish to remove from system</option>
                {filteredData.map((item) => (
                  <option key={item.id} value={item.id}>
                    { item.departmentname }
                  </option>
                ))}
              </select>
              <label className="security-code">Security Code : &nbsp;&nbsp;&nbsp; AJAJaj19998#@#@$$</label>
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
              <button className="machine-button" onClick={handleClose}>Remove Department</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandleHideDepartment;



