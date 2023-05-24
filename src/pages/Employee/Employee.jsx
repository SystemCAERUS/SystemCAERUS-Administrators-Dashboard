import React from "react";
import Sidebar from '../../components/sidebar/Sidebar'
import '../Dashboard/home.scss'
import Navbar from '../../components/navbar/Navbar'

function Employee() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="content">Employee</div>
      </div>
    </div>
  );
}

export default Employee;
