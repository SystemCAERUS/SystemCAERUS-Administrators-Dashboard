import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import "./manage.scss";
import Logo from "../../components/sidebar/logowilmar.png";
import { Link } from "react-router-dom";

function ManageMachines() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="titleEmployee">
            <span className="notificationEmployee">Manage Machines</span>
          </div>
          <div className="issueManageWrapper">
            <div className="manageFirstRow">
              <Link to="/map/machines/add" style={{ textDecoration: "none" }}>
                <div className="openIssues">Add Machine</div>
              </Link>
              <Link
                to="/map/machines/close"
                style={{ textDecoration: "none" }}
              >
                <div className="closeIssues">Remove Machine</div>
              </Link>
            </div>
            <div className="manageSecondRow">
              <Link
                to="/map/machines/update"
                style={{ textDecoration: "none" }}
              >
                <div className="updateManageIssues">
                  Update Machine Details
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

export default ManageMachines;
