import React, { useState,useEffect } from "react";
import "./Add.scss";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

function Update() {
  const history = useHistory();
  const location = useLocation();
  const noticeId = location.pathname.split("/")[3];

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
  }

  //deal with the notice id fetch
  /*const [jsonData, setJsonData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const desiredId = noticeId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/hr');
        setJsonData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (jsonData.length > 0) {
      const filteredItem = jsonData.find(item => item.id === desiredId);
      setFilteredData(filteredItem);
    }
  }, [jsonData, desiredId]);*/



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
            <h1 className="addTitle">Update Notice</h1>
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
                //placeholder={filteredData.notification}
              />
              {/*errors.notification && (
                <span className="error">{errors.notification}</span>
              )*/}
            </div>
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
            <button onClick={handleClick} className="noticeAddButtonAddPage">
              Update Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
