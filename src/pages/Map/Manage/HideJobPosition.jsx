import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "../general.scss";
import { useHistory } from "react-router-dom";

function HideJobPosition() {
  const history = useHistory();
  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobID, setSelectedJobID] = useState('');
  const [securityCode, setSecurityCode] = useState("");
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

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedJobID(selectedValue);
  };

  const handleSecCode = (e) => {
    setSecurityCode(e.target.value);
  };

  //Validate form
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!(securityCode === "AJAJaj19998#@#@$$") || !selectedJobID) {
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
      selectedJobID: parseInt(selectedJobID),
    };

    axios
      .put("http://localhost:8800/positions", requestData)
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
              <span className="notification">Hide Job Position</span>
            </div>
            <div className="issue-close-fields">
              <select
                value={selectedJobID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">Select Job Position to Close</option>
                {filteredData.map((item) => (
                  <option key={item.positionID} value={item.positionID}>
                    {item.positionName}
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
              <button className="machine-button" onClick={handleClose}>Remove Job Position</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HideJobPosition;
