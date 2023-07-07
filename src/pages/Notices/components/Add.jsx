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
    desc: "",
    value: null,
    date: "",
  });

  const [errors, setErrors] = useState({
    notification: "",
    desc: "",
    value: "",
    date: "",
  });

  function handleChange(e) {
    setNotice((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  async function handleClick(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      if (!notice.date) {
        setErrors((prev) => ({ ...prev, date: "Please select a date." }));
      } else {
        const updatedDate = new Date(notice.date);
        updatedDate.setDate(updatedDate.getDate() + 1);

        const updatedNotice = {
          ...notice,
          date: updatedDate.toISOString().split("T")[0],
        };

        try {
          await axios.post("http://localhost:8800/hr", updatedNotice);
          history.push("/hr");
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setErrors(validationErrors);
    }
  }

  function validateForm() {
    const errors = {};

    if (notice.notification.trim() === "") {
      errors.notification = "Please enter the title of the notice.";
    }

    if (notice.desc.trim() === "") {
      errors.desc = "Please enter the notice description.";
    }

    if (notice.value === null) {
      errors.value = "Priority is missing";
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
            <h1 className="addTitle">ADD NEW NOTICE</h1>
            <div className="noticeTitle">
              <label className="noticeLabel">
                Please Enter the Title of Notice here :
                <h6>කරුණාකර දැන්වීමේ මාතෘකාව මෙහි ඇතුළත් කරන්න</h6>
              </label>
              <input
                className="notification"
                type="text"
                onChange={handleChange}
                name="notification"
                value={notice.notification}
                required
                placeholder={errors.notification}
              />
              {/*errors.notification && (
                <span className="error">{errors.notification}</span>
              )*/}
            </div>
            <br />
            <div className="noticeDesc">
              <label className="noticeDescLabel">
                Please Enter the Notice Description :
                <h6>කරුණාකර දැනුම්දීමේ විස්තරය ඇතුළත් කරන්න</h6>
              </label>
              <textarea
                className="input-field"
                rows={3}
                name="desc"
                value={notice.desc}
                onChange={handleChange}
                required
                placeholder={errors.desc && errors.desc}
              ></textarea>
              {/*errors.desc && <span className="error">{errors.desc}</span>*/}
            </div>
            <br />
            <div className="pikers">
              <select
                className="dropdown"
                onChange={handleChange}
                name="value"
                value={notice.value}
              >
                <option value="">Select Priority</option>
                <option value={0}>Low Priority</option>
                <option value={1}>High Priority</option>
              </select>
              <br />
              <input
                className="issueDatePiker"
                type="date"
                placeholder="date"
                onChange={handleChange}
                name="date"
                value={notice.date}
                required
              />
            </div>
            <br />
            <h4>
              {errors.value && <span className="error">{errors.value}</span>}
            </h4>
            <h4>
              {errors.date && <span className="error">{errors.date}</span>}
            </h4>
            <br />
            <button className="noticeAddButtonAddPage" onClick={handleClick}>
              Add Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
