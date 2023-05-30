import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./planner.scss";

function Planner() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="contentplanned">
          <div className="plannedworks">
            <div className="plannedtitle">Planned Maintainance Jobs</div>
            <div
              className="plannedpartscontent"
              style={{ overflowY: "auto", maxHeight: "90%" }}
            >
              <div className="plannedtableHeader">
                <tr>
                  <td className="planneddateH">Date</td>
                  <td className="plannedTask">Task</td>
                  <td className="plannedMachine">Machine</td>
                  <td className="plannedDepartment">Department</td>
                </tr>
              </div>

              {/*repairParts.length === 0 ? (
                <p className="noparts">No Parts Under Repair</p>
              ) : (
                repairParts.map((item) =>
                  item.status === 1 ? (
                    <EquipmentBox
                      dpartmentName={item.departmentname}
                      givendate={item.givendate}
                      id={item.repairid}
                      returndate={item.returndate}
                      partName={item.partname}
                      recieveDate={item.returndate}
                      machineName={item.machinename}
                    />
                  ) : null
                )
                  )*/}
            </div>
          </div>
          <div className="plannedAnalyticsManage">
            <div>
              <div className="plannedGraphTitle">
                Planned Tasks By Department
              </div>
              <div className="plannedGraph">
                graph
              </div>
            </div>
            <div className="manageTitleContainer">
              <Link to="/planner" style={{ textDecoration: "none" }}>
                <div className="manageTitle">Manage Planned Tasks</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planner;
