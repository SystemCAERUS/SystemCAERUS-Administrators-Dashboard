import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

function UpdatePlannedTasks() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">Update Planned Tasks</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePlannedTasks;
