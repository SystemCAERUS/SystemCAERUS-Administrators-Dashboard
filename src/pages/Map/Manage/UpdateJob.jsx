import React, { useState,useEffect } from "react";
//import "./Add.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddJob() {
  const history = useHistory();

  const [positions, setPositions] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const filteredData = positions.filter((item) => item.positionHide === 1);

  useEffect(() => {
    const fetchedRepairs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/positions");
        setPositions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedRepairs();
  }, []);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedID(selectedValue);
  };


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
        selectedID,
      };

      console.log(updatedPosition)

      try {
        await axios.put(
          "http://localhost:8800/positions/update",
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
            <h1 className="addTitle">UPDATE JOB POSITIONS</h1>
            <div className="dip-dropdown">
              <select
                value={selectedID}
                onChange={handleDropdownChange}
                className="open-issue-dropdown"
              >
                <option value="">
                  Select Job Position you wish to Update from system
                </option>
                {filteredData.map((item) => (
                  <option key={item.positionID} value={item.positionID}>
                    {item.positionName}
                  </option>
                ))}
              </select>
            </div>
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
              Update Job Position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJob;