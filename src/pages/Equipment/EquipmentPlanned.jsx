import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import "./managePlanned.scss";
import Logo from "../../components/sidebar/logowilmar.png";
import { Link } from "react-router-dom";

function EquipmentPlanned() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="titleEmployee">
            <span className="notificationEmployee">Manage Under Repair Parts</span>
          </div>
          <div className="issueManageWrapper">
            <div className="manageFirstRow">
              <Link to="/equipment/manage/open" style={{ textDecoration: "none" }}>
                <div className="openIssues">Add New Part</div>
              </Link>
              <Link
                to="/equipment/manage/close"
                style={{ textDecoration: "none" }}
              >
                <div className="closeIssues">Remove Under Repair Part</div>
              </Link>
            </div>
            <div className="manageSecondRow">
              <Link
                to="/equipment/manage/update"
                style={{ textDecoration: "none" }}
              >
                <div className="updateManageIssues">
                  Update Exsiting Details
                </div>
              </Link>{/*}
              <Link
                to="/equipment/manage/report"
                style={{ textDecoration: "none" }}
              >
                <div className="reportGenerateIssues">Report Generation</div>
  </Link>*/}
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

export default EquipmentPlanned;
