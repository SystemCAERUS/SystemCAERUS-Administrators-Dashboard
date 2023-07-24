import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

function ClosePlannedTasks() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">Close Planned Task</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosePlannedTasks;
