import React, { useState } from "react";
import "./Add.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Add() {
  const history = useHistory();

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
      await axios.post("http://localhost:8800/hr", notice);
      history.push("/hr");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="form">
            <h1 className="title">Add New Notice</h1>
            <input
              className="notification"
              type="text"
              placeholder="notification"
              onChange={handleChange}
              name="notification"
              required
            />
            <br/>
            <input
              className="desc"
              type="text"
              placeholder="desc"
              onChange={handleChange}
              name="desc"
              required
            />
            <br/>
            <input
              type="number"
              placeholder="value"
              onChange={handleChange}
              name="value"
            />
            <br/>
            <input
              type="date"
              placeholder="date"
              onChange={handleChange}
              name="date"
            />
            <br/>
            <button onClick={handleClick}>Add Notice</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
