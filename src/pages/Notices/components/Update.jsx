import React, { useState } from "react";
import "./Add.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import axios from "axios";
import { useHistory , useLocation} from "react-router-dom";

function Update() {
  const history = useHistory();
  const location = useLocation();
  const noticeId = location.pathname.split("/")[3];

  const [notice, setNotice] = useState({
    notification: "",
    desc:"",
    value: null,
    date: "",
  });

  function handleChange(e) {
    setNotice((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/hr/update/${noticeId}`, notice);
      history.push("/hr");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="form">
            <h1>Update Notice</h1>
            <input
              type="text"
              placeholder="notification"
              onChange={handleChange}
              name="notification"
              required
            />
            <input
              type="text"
              placeholder="desc"
              onChange={handleChange}
              name="desc"
              required
            />
            <input
              type="number"
              placeholder="value"
              onChange={handleChange}
              name="value"
            />
            <input
              type="date"
              placeholder="date"
              onChange={handleChange}
              name="date"
            />
            <button onClick={handleClick}>Update Notice</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;



