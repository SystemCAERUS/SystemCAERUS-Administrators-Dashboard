import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import "./equipment.scss"

function Equipment() {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="contentequipment">
        Equipment
      </div>
    </div>
  </div>
  )
}

export default Equipment
