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
import Logo from './logowilmar.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">SystemCAERUS</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">TRACKING</p>
          <li>
            <WorkHistoryIcon className="icon" />
            <span>Issues</span>
          </li>
          <li>
            <NextPlanIcon className="icon" />
            <span>Planner</span>
          </li>

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

          <p className="title">HR & COMMUNICATION</p>
          <li>
            <ChatIcon className="icon" />
            <span>Chat</span>
          </li>
          <li>
            <NaturePeopleIcon className="icon" />
            <span>HR</span>
          </li>

          <p className="title">FACTORY MAP</p>
          <li>
            <NaturePeopleIcon className="icon" />
            <span>Map</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <a href="https://pyramidwilmar.com/" target="_blank">
          <img
            className="wilmar-logo"
            src={Logo}
            alt="alternatetext"
          />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
