import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import MsgBox from "./components/msg";
import "../Dashboard/home.scss";
import { Link } from "react-router-dom";
import "./hr.scss";


function Hr() {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const fetchedMsges = async () => {
      try {
          const res = await axios.get("http://localhost:8800/hr");
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
          <div className="title">
            <span className="notification">Notifications</span>
          </div>
          <div className="content" style={{ overflowY: "auto", maxHeight: "70vh" }}>
            {notification.map((msg) => (
              <MsgBox
                message={msg.notification}
                id={msg.id}
                date={msg.date}
                key={msg.id}
              />
            ))}
          </div>
          <div>
            <Link to="/hr/add" style={{ textDecoration: "none" }}>
              <button className="btn">Add New</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hr;
