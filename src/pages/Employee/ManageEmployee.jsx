import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/sidebar/logowilmar.png";
import { Link } from "react-router-dom";

function Manage() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="titleEmployee">
            <span className="notificationEmployee">Manage Employees</span>
          </div>
          <div className="issueManageWrapper">
            <div className="manageFirstRow">
              <Link to="/employees/manage/open" style={{ textDecoration: "none" }}>
                <div className="openIssues">Add Employee</div>
              </Link>
              <Link
                to="/employees/manage/close"
                style={{ textDecoration: "none" }}
              >
                <div className="closeIssues">Remove Employee</div>
              </Link>
            </div>
            <div className="manageSecondRow">
              <Link
                to="/employees/manage/update"
                style={{ textDecoration: "none" }}
              >
                <div className="updateManageIssues">
                  Update Employee
                </div>
              </Link>
              <Link
                to="/employees/manage/report"
                style={{ textDecoration: "none" }}
              >
                <div className="reportGenerateIssues">Report Generation</div>
              </Link>
            </div>
            <div className="bottom">
              <a href="https://pyramidwilmar.com/" target="_blank">
                <img
                  className="wilmar-logo"
                  src={Logo}
                  alt="alternatetext"
                  style={{ width: "150px", height: "auto" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
