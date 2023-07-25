import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

function UpdateIssue() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">Remove Employee</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateIssue;
