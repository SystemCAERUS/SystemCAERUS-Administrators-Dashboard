import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

function OpenPlannedTasks() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">Open New Planned Tasks</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenPlannedTasks;
