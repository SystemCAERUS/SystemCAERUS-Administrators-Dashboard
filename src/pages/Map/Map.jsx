import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/sidebar/logowilmar.png";
import "./map.scss";

function Map() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="mapContent">
            <div className="departmentTable">
              <div className="mapTitle">Departments</div>
            </div>
            <div className="departmentSecondTable">
              <div className="manageDepartmentButton">Manage Departments</div>
              <div className="manageMachineButton">Manage Machines</div>
              <div className="wilmarMapImage">
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
    </div>
  );
}

export default Map;
