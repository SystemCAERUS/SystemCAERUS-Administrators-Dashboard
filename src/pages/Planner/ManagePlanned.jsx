import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./manage.scss";
import Logo from "../../../components/sidebar/logowilmar.png";
import { Link } from "react-router-dom";

function ManagePlanned() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="titleEmployee">
            <span className="notificationEmployee">Manage Breakdowns</span>
          </div>
          <div className="issueManageWrapper">
            <div className="manageFirstRow">
              <Link to="/issues/manage/open" style={{ textDecoration: "none" }}>
                <div className="openIssues">Open a New Breakdown</div>
              </Link>
              <Link
                to="/issues/manage/close"
                style={{ textDecoration: "none" }}
              >
                <div className="closeIssues">Close a Breakdown</div>
              </Link>
            </div>
            <div className="manageSecondRow">
              <Link
                to="/issues/manage/update"
                style={{ textDecoration: "none" }}
              >
                <div className="updateManageIssues">
                  Update Exsiting Breakdown
                </div>
              </Link>
              <Link
                to="/issues/manage/report"
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
