import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./manage.scss";
import Logo from "../../../components/sidebar/logowilmar.png";

function Manage() {
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
              <div className="openIssues">Open a New Breakdown</div>
              <div className="closeIssues">Close a Breakdown</div>
            </div>
            <div className="manageSecondRow">
              <div className="updateManageIssues">
                Update Exsiting Breakdown
              </div>
              <div className="reportGenerateIssues">Report Generation</div>
            </div>
            <div className="bottom">
              <a href="https://pyramidwilmar.com/" target="_blank">
                <img className="wilmar-logo" src={Logo} alt="alternatetext" style={{ width: '150px', height: 'auto' }}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
