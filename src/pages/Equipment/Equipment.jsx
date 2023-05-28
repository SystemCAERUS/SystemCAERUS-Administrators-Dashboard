import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import "./equipment.scss";
import { Link } from "react-router-dom";
import EquipmentBox from "./components/EquipmentBox";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Equipment() {
  const [repairParts, setRepairParts] = useState([]);
  useEffect(() => {
    const fetchedReapairs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/repairs");
        setRepairParts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedReapairs();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="contentequipment">
          <div className="spareparts">
            <div className="sparetitle">Parts Under Reapair</div>
            <div
              className="partscontent"
              style={{ overflowY: "auto", maxHeight: "60vh" }}
            >
              <div className="tableHeader">
                <tr>
                  <td className="givendateH">Given date</td>
                  <td className="repairdateH">Return date</td>
                  <td className="repairnameH">Name</td>
                  <td className="mNameDataH">Machine</td>
                  <td className="dNameDataH">Department</td>
                </tr>
              </div>

              {repairParts.map((item) =>
                item.status === 1 ? (
                  <EquipmentBox
                    dpartmentName={item.departmentname}
                    givendate={item.givendate}
                    id={item.repairid}
                    returndate={item.returndate}
                    partName={item.partname}
                    recieveDate={item.returndate}
                    machineName={item.machineName}
                  />
                ) : null
              )}
            </div>
          </div>
          <div className="sparesection">
            <div>
              <div className="manageTitle">Manage</div>
              <div className="manageContent">
                <Link to="/equipment/add" style={{ textDecoration: "none" }}>
                  <div className="addRepair">ADD NEW PARTS</div>
                </Link>
                <Link to="/equipment/manage" style={{ textDecoration: "none" }}>
                  <div className="manageRepair">MANAGE PARTS </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="graphtitle">Graph</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipment;
