import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import "./equipment.scss";
import { Link } from "react-router-dom";
import EquipmentBox from "./components/EquipmentBox";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "./components/PieChart";

function Equipment() {
  const [data, setData] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [repairParts, setRepairParts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //function to create labels and data
  function chartdataFiltering() {
    const uniqueDepartmentNames = [
      ...new Set(
        repairParts
          .filter((item) => item.status === 1)
          .map((item) => item.departmentname)
      ),
    ];
    setDepartment(uniqueDepartmentNames);

    const departmentCount = uniqueDepartmentNames.map((departmentName) => {
      const count = repairParts.filter(
        (item) => item.departmentname === departmentName && item.status === 1
      ).length;
      return count;
    });
    setData(departmentCount);
  }

  useEffect(() => {
    const fetchedReapairs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/repairs");
        setRepairParts(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedReapairs();
  }, []);

  //chart Data Filtering need to be happen after fetching
  useEffect(() => {
    if (!isLoading) {
      chartdataFiltering();
    }
  }, [isLoading]);

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

              {repairParts.length === 0 ? (
                <p className="noparts">No Parts Under Repair</p>
              ) : (
                repairParts.map((item) =>
                  item.status === 1 ? (
                    <EquipmentBox
                      dpartmentName={item.departmentname}
                      givendate={item.givendate}
                      id={item.repairid}
                      returndate={item.returndate}
                      partName={item.partname}
                      recieveDate={item.returndate}
                      machineName={item.machinename}
                    />
                  ) : null
                )
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
              <div className="graphPie">
                <PieChart labels={departments} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipment;
