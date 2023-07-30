import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import "./manage.scss";
import "../Issues/manage/manage.scss"
import Logo from "../../components/sidebar/logowilmar.png";
import { Link } from "react-router-dom";
import "../Notices/hr.scss"

function ManageJobPositions() {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="titleEmployee">
            <span className="notificationEmployee">Manage Job Positions</span>
          </div>
          <div className="issueManageWrapper">
            <div className="manageFirstRow">
              <Link to="/map/positions/add" style={{ textDecoration: "none" }}>
                <div className="openIssues" style={{ "background-color": "rgba(255, 203, 203, 1)"}}>Add New Position</div>
              </Link>
              <Link
                to="/map/positions/hide"
                style={{ textDecoration: "none" }}
              >
                <div className="closeIssues">Remove Job Position</div>
              </Link>
            </div>
            <div className="manageSecondRow">
              <Link
                to="/map/positions/update"
                style={{ textDecoration: "none" }}
              >
                <div className="updateManageIssues" style={{ "background-color": "rgba(225,240,241,255)"}}>
                  Update Job Position 
                </div>
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

export default ManageJobPositions;
