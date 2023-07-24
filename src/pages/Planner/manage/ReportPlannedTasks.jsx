import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

function ReportPlannedTasks() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">Report Generation</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportPlannedTasks;
