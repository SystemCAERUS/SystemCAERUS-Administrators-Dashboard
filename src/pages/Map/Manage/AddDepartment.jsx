import React, { useState } from "react";
//import "./Add.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Add() {
  const history = useHistory();

  const [departments, setDepartment] = useState({
    name: "",
    desc: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    desc: "",
  });

  function handleChange(e) {
    setDepartment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  async function handleClick(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const updatedDepartments = {
        ...departments,
      };

      try {
        await axios.post(
          "http://localhost:8800/departments",
          updatedDepartments
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

    if (departments.name.trim() === "") {
      errors.name = "Please enter the name of the department";
    }

    if (departments.desc.trim() === "") {
      errors.desc = "Please enter the desciption of the department";
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
            <h1 className="addTitle">ADD DEPARTMENT</h1>
            <div className="noticeTitle">
              <label className="noticeLabel">
                Please Enter the Department name :
              </label>
              <input
                className="notification"
                type="text"
                onChange={handleChange}
                name="name"
                value={departments.name}
                required
                placeholder={errors.name}
              />
            </div>
            <br />
            <div className="noticeDesc">
              <label className="noticeDescLabel" style={{marginLeft:60}}>
                <br />
                Please Enter the Description
                <br />
                Department :
              </label>
              <textarea
                className="input-field"
                rows={3}
                name="desc"
                value={departments.desc}
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
              Add Department
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
