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
        <div className="spareparts">
          <div className="sparetitle">Parts Under Reapair</div>
          <div>parts</div>
        </div>
        <div className="sparesection">
          <div>
            <div className="manageTitle">Manage</div>
            <div className="manageContent"></div>
          </div>
          <div>
            <div className="graphtitle">Graph</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Equipment
