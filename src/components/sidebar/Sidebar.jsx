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
import Logo from "./logowilmar.png";
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
          <li>
            <WorkHistoryIcon className="icon" />
            <span>Issues</span>
          </li>
          <li>
            <NextPlanIcon className="icon" />
            <span>Planner</span>
          </li>
          <hr />
          <p className="title">INFORMATION</p>
          <li>
            <HandymanIcon className="icon" />
            <span>Equipment</span>
          </li>
          <li>
            <PrecisionManufacturingIcon className="icon" />
            <span>Machinery</span>
          </li>
          <li>
            <Face6Icon className="icon" />
            <span>Employee</span>
          </li>
          <hr />
          <p className="title">HR & COMMUNICATION</p>
          <li>
            <ChatIcon className="icon" />
            <span>Chat</span>
          </li>

          <Link to="/hr" style={{ textDecoration: "none" }}>
            <li>
              <NaturePeopleIcon className="icon" />
              <span>Notice Board</span>
            </li>
          </Link>
          <hr />
          <p className="title">FACTORY MAP</p>
          <li>
            <NaturePeopleIcon className="icon" />
            <span>Map</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
