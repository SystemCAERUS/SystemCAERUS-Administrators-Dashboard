import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import EmployeeBox from "./EmployeeBox";
import "../Dashboard/home.scss";
import { Link } from "react-router-dom";
import "./employee.scss";

function Employee() {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const fetchedMsges = async () => {
      try {
        const res = await axios.get("http://localhost:8800/employees");
        /*const res = await fetchNotifications();*/
        setNotification(res.data);
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
          <div className="titleEmployee">
            <span className="notificationEmployee">Employees</span>
            <div className="btnEmployee">
              <Link to="/employees/manage" style={{ textDecoration: "none" }}>
                <button className="btnelementEmployee">Manage Employees</button>
              </Link>
            </div>
          </div>
          <div
            className="contentEmployee"
            style={{ overflowY: "auto", maxHeight: "80vh" }}
          >
            <div>
              <tr className="tr">
                <td className="userID">
                  <div>ID</div>
                </td>
                <td className="date">
                  <div>Profile</div>
                </td>
                <td className="msg">
                  <div>Name </div>
                </td>
                <td className="position">
                  <div>Title</div>
                </td>
                <td className="experince">
                  <div>Experince</div>
                </td>
                <td className="email">
                  <div>Email</div>
                </td>
                <td className="phone">
                  <div>Phone</div>
                </td>
              </tr>
            </div>
            {notification.map((msg) => (
              <EmployeeBox
                userid={msg.userid}
                name={msg.name}
                imageURL={msg.imageURL}
                phone={msg.phone}
                position={msg.positionName}
                key={msg.userid}
                email={msg.email}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
