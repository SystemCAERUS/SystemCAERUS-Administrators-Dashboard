import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function OpenIssue() {
  const history = useHistory();

  const [issues, setIssues] = useState({
    issueTitle: "",
    issueDesc: "",
    priority: null,
  });

  const [errors, setErrors] = useState({
    issueTitle: "",
    issueDesc: "",
    priority: "",
  });

  function handleChange(e) {
    if (e.target.name === "priority") {
      setIssues((prev) => ({ ...prev, priority: parseInt(e.target.value) }));
    } else {
      setIssues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  async function handleClick(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const updatedIssues = {
        ...issues,
      };

      try {
        console.log(updatedIssues);
        await axios.post("http://localhost:8800/issues", updatedIssues);
        history.push("/issues");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  }

  function validateForm() {
    const errors = {};

    if (issues.issueTitle.trim() === "") {
      errors.issueTitle = "Please enter the title of the issues.";
    }

    if (issues.issueDesc.trim() === "") {
      errors.issueDesc = "Please enter the issues description.";
    }

    if (issues.priority === null) {
      errors.priority = "Priority is missing";
    }

    return errors;
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="form">
            <h1 className="addTitle">OPEN BREAKDOWNS</h1>
            <div className="IssuesTitle">
              <label className="IssuesLabel">
                Please Enter the Breakdown Title :
                <h6>කරුණාකර දැන්වීමේ මාතෘකාව මෙහි ඇතුළත් කරන්න</h6>
              </label>
              <input
                className="issueTitle"
                type="text"
                onChange={handleChange}
                name="issueTitle"
                value={issues.issueTitle}
                required
                placeholder={errors.issueTitle}
              />
            </div>
            <br />
            <div className="IssuesDesc">
              <label className="IssuesDescLabel">
                Please Enter the Description :
                <h6>කරුණාකර දැනුම්දීමේ විස්තරය ඇතුළත් කරන්න</h6>
              </label>
              <textarea
                className="input-field"
                rows={3}
                name="issueDesc"
                value={issues.issueDesc}
                onChange={handleChange}
                required
                placeholder={errors.issueDesc && errors.issueDesc}
              ></textarea>
            </div>
            <br />
            <div className="pikers">
              <select
                className="dropdown"
                onChange={handleChange}
                name="priority"
                value={issues.priority}
              >
                <option value="">Select Priority</option>
                <option value={0}>Low Priority</option>
                <option value={1}>Avg Priority</option>
                <option value={2}>High Priority</option>
              </select>
              <br />
            </div>
            <br />
            <h4>
              {errors.value && <span className="error">{errors.value}</span>}
            </h4>
            <br />
            <button className="IssuesAddButtonAddPage" onClick={handleClick}>
              OPEN BREAKDOWN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenIssue;
