import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../components/sidebar/logowilmar.png";
import "./map.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DepartmentBox from "./DepartmentBox";
import { Link } from "react-router-dom";

function Map() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchedMsges = async () => {
      try {
        const res = await axios.get("http://localhost:8800/departments");
        setDepartments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedMsges();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="mapContent">
            <div className="departmentTable">
              <div className="mapTitle">Departments</div>
              <div
                className="partscontent"
                style={{ overflowY: "auto", maxHeight: "90%" }}
              >
                <div>
                  <tr className="tr-map">
                    <td className="department-id-map">
                      <div>ID</div>
                    </td>
                    <td className="department-name-map">
                      <div>Department Name</div>
                    </td>
                  </tr>
                  <div className="rendered-map-boxes">
                    {departments.map((department) =>
                      department.hide === 0 ? (
                        <DepartmentBox
                          className="departmentDataBox"
                          userid={department.id}
                          name={department.departmentname}
                        />
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="departmentSecondTable">
              <Link
                to="/map/departments"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div className="manageDepartmentButton">Manage Departments</div>
              </Link>

              <Link
                to="/map/machines"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div className="manageMachineButton">Manage Machines</div>
              </Link>

              <Link
                to="/map/positions"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div className="manageMachineButton">Manage Job Positions</div>
              </Link>

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
