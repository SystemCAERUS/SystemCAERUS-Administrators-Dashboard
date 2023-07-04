import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import "./issues.scss"
import Predict from "./Predict";
import LineChart from "./components/LineChart";

function Issues() {
  return (
    <div className="home" >
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="contentIssues" style={{ overflowY: "auto", maxHeight: "80%" }}>
          <div className="issuestable"><Predict/></div>
          <div className="lineChartManage">
            <div className="lineChart">
              <LineChart/>
            </div>
            <div className="manageIssues">Manage Issues</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Issues
