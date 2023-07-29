import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import "./closeIssue.scss";
import { useHistory } from "react-router-dom";

function CloseIssue() {
  const [breakdowns, setBreakdowns] = useState([]);
  const [selectedIssueID, setSelectedIssueID] = useState("");
  const [closingRemark, setClosingRemark] = useState("");
  const [closingDes, setClosingDes] = useState("");
  const [finishedWorkers, setFinishedWorkers] = useState("");
  const [hardtoAccesTo, setHardToAccessTo] = useState("");
  const history = useHistory();

  const filteredData = breakdowns.filter((item) => item.status === 1);

  //clock logic
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleHoursChange = (e) => {
    const value = e.target.value;
    setHours(value);
  };

  const handleMinutesChange = (e) => {
    const value = e.target.value;
    setMinutes(value);
  };

  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/issues");
        setBreakdowns(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedIssues();
  }, []);

  //Handle inputs fields
  const handleClosingRemark = (e) => {
    setClosingRemark(e.target.value);
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedIssueID(selectedValue);
  };

  const handleClosingDes = (e) => {
    setClosingDes(e.target.value);
  };

  const handleFinishedWorkers = (e) => {
    setFinishedWorkers(e.target.value);
  };

  const handleHardToAccesTo = (e) => {
    setHardToAccessTo(e.target.value);
  };

  //Validate form
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!finishedWorkers || !closingDes || !closingRemark || !selectedIssueID) {
      errors.form = "PLEASE FILL THE ALL FIELDS";
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
    console.log(hardtoAccesTo);

    const requestData = {
      finishedWorkers: finishedWorkers,
      selectedIssueID: parseInt(selectedIssueID),
      closingDes: closingDes,
      closingRemark: closingRemark,
      hardtoAccesTo: hardtoAccesTo,
    };

    axios
      .put("http://localhost:8800/issues", requestData)
      .then((res) => {
        console.log(res.data);
        history.push("/issues");
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
              <span className="notification">Close Breakdown</span>
            </div>
            <div className="issue-close-fields">
              <select
                value={selectedIssueID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">Select an Issue to Close</option>
                {filteredData.map((item) => (
                  <option key={item.issueID} value={item.issueID}>
                    {item.des}
                  </option>
                ))}
              </select>
              <input
                type="text"
                onChange={handleClosingRemark}
                value={closingRemark}
                placeholder="Please Enter the Closing Remark"
                className="input-machine-name"
              />
              <input
                type="text"
                onChange={handleClosingDes}
                value={closingDes}
                placeholder="Please enter the Detailed Description about the breakdown"
                className="input-machine-name"
              />
              <input
                type="text"
                onChange={handleFinishedWorkers}
                value={finishedWorkers}
                placeholder="Employee's names who finished the Task    (Ex: Janith, Kavindu, Lahiru...)"
                className="input-small-des"
              />

              <div className="pikers">
                <select
                  className="dropdown"
                  onChange={handleHardToAccesTo}
                  name="priority"
                  value={hardtoAccesTo}
                >
                  <option value="">ABNORMALITY</option>
                  <option value={"Clean"}>Clean</option>
                  <option value={"Inspect"}>Inspect</option>
                  <option value={"Lubricate"}>Lubricate</option>
                  <option value={"Replace"}>Replace</option>
                  <option value={"Tighten"}>Tighten</option>
                  <option value={"Other"}>Other</option>
                </select>
                <br />
              </div>
              <div className="pikers">
                <select
                  className="dropdown"
                  onChange={handleHardToAccesTo}
                  name="priority"
                  value={hardtoAccesTo}
                >
                  <option value="">CONTAMINATION</option>
                  <option value={"Clean"}>Clean</option>
                  <option value={"Inspect"}>Inspect</option>
                  <option value={"Lubricate"}>Lubricate</option>
                  <option value={"Replace"}>Replace</option>
                  <option value={"Tighten"}>Tighten</option>
                  <option value={"Other"}>Other</option>
                </select>
                <br />
              </div>
              <div className="pikers">
                <select
                  className="dropdown"
                  onChange={handleHardToAccesTo}
                  name="priority"
                  value={hardtoAccesTo}
                >
                  <option value="">HARD TO ACCESS TO</option>
                  <option value={"Clean"}>Clean</option>
                  <option value={"Inspect"}>Inspect</option>
                  <option value={"Lubricate"}>Lubricate</option>
                  <option value={"Replace"}>Replace</option>
                  <option value={"Tighten"}>Tighten</option>
                  <option value={"Other"}>Other</option>
                </select>
                <br />
              </div>

              {formErrors.form && (
                <p style={{ color: "red" }}>{formErrors.form}</p>
              )}
              <button className="machine-button" onClick={handleClose}>
                CLOSE BREAKDOWN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseIssue;
