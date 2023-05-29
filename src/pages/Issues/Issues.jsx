import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import "./issues.scss"

function Issues() {
  return (
    <div className="home" >
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="contentIssues" style={{ overflowY: "auto", maxHeight: "80%" }}>
          <div className="issuestable">Issues</div>
          <div className="lineChartManage">
            <div className="lineChart">line chart</div>
            <div className="manageIssues">Manage Issues</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Issues
