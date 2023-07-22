import React, { useState } from "react";
//import "./Add.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddJob() {
  const history = useHistory();

  const [position, setPosition] = useState({
    name: "",
    desc: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    desc: "",
  });

  function handleChange(e) {
    setPosition((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  async function handleClick(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const updatedPosition = {
        ...position,
      };

      try {
        await axios.post(
          "http://localhost:8800/positions",
          updatedPosition
        );
        history.push("/map");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  }

  function validateForm() {
    const errors = {};

    if (position.name.trim() === "") {
      errors.name = "Please enter the Job Title";
    }

    if (position.desc.trim() === "") {
      errors.desc = "Please enter the Job description";
    }

    return errors;
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="form">
            <h1 className="addTitle">ADD JOB POSITIONS</h1>
            <div className="noticeTitle">
              <label className="noticeLabel">
                Please Enter the Job Title :
              </label>
              <input
                className="notification"
                type="text"
                onChange={handleChange}
                name="name"
                value={position.name}
                required
                placeholder={errors.name}
              />
            </div>
            <br />
            <div className="noticeDesc">
              <label className="noticeDescLabel" style={{marginLeft:60}}>
                <br />
                Please Enter the Job
                <br />
                Description :
              </label>
              <textarea
                className="input-field"
                rows={3}
                name="desc"
                value={position.desc}
                onChange={handleChange}
                required
                placeholder={errors.desc && errors.desc}
              ></textarea>
            </div>
            <br />
            <br />
            <h4>
              {errors.value && <span className="error">{errors.value}</span>}
            </h4>
            <h4>
              {errors.date && <span className="error">{errors.date}</span>}
            </h4>
            <br />
            <button className="noticeAddButtonAddPage" onClick={handleClick}>
              Add Job Position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJob;