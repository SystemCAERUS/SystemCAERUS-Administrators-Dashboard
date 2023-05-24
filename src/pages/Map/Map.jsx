import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";

function Map() {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="content">Map</div>
    </div>
  </div>
  )
}

export default Map
