import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import HandymanIcon from "@mui/icons-material/Handyman";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ChatIcon from "@mui/icons-material/Chat";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import Face6Icon from "@mui/icons-material/Face6";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">SystemCAERUS</span>
      </div>
      <hr className="logohr" />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <hr />
          <p className="title">TRACKING</p>
          <Link to="/issues" style={{ textDecoration: "none" }}>
            <li>
              <WorkHistoryIcon className="icon" />
              <span>Issues</span>
            </li>
          </Link>

          <Link to="/planner" style={{ textDecoration: "none" }}>
            <li>
            <NextPlanIcon className="icon" />
            <span>Planner</span>
            </li>
          </Link>
          <hr />
          <p className="title">INFORMATION</p>

          <Link to="/equipment" style={{ textDecoration: "none" }}>
            <li>
            <HandymanIcon className="icon" />
            <span>Equipment</span>
            </li>
          </Link>
          <Link to="/machines" style={{ textDecoration: "none" }}>
            <li>
              <PrecisionManufacturingIcon className="icon" />
              <span>Machinery</span>
            </li>
          </Link>
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <li>
              <Face6Icon className="icon" />
              <span>Employee</span>
            </li>
          </Link>

          <hr />
          <p className="title">HR & COMMUNICATION</p>

          <Link to="/chat" style={{ textDecoration: "none" }}>
            <li>
              <ChatIcon className="icon" />
              <span>Chat</span>
            </li>
          </Link>

          <Link to="/hr" style={{ textDecoration: "none" }}>
            <li>
              <NaturePeopleIcon className="icon" />
              <span>Notice Board</span>
            </li>
          </Link>
          <hr />
          <p className="title">FACTORY MAP</p>
          <Link to="/map" style={{ textDecoration: "none" }}>
            <li>
              <NaturePeopleIcon className="icon" />
              <span>Map</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
