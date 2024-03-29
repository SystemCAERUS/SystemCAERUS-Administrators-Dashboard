import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./managePlanned.scss";
import Logo from "../../components/sidebar/logowilmar.png";
import { Link } from "react-router-dom";

function ManagePlanned() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="titleEmployee">
            <span className="notificationEmployee">Manage Planned Tasks</span>
          </div>
          <div className="issueManageWrapper">
            <div className="manageFirstRow">
              <Link to="/planner/manage/open" style={{ textDecoration: "none" }}>
                <div className="openIssues">Open New Planned Task</div>
              </Link>
              <Link
                to="/planner/manage/close"
                style={{ textDecoration: "none" }}
              >
                <div className="closeIssues">Close Planned Task</div>
              </Link>
            </div>
            <div className="manageSecondRow">
              <Link
                to="/planner/manage/update"
                style={{ textDecoration: "none" }}
              >
                <div className="updateManageIssues">
                  Update Exsiting Task
                </div>
              </Link>
              <Link
                to="/planner/manage/report"
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

export default ManagePlanned;
