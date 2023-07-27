import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import MachineBox from "./components/MachineBox";
import "./machine.scss";

function Machine() {
  const [machines, setMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = machines.filter((item) => item.hideMachine === 0);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const res = await axios.get("http://localhost:8800/machines");
        setMachines(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMachines();
  }, []);

  const openModal = (machine) => {
    setSelectedMachine(machine);
  };

  const closeModal = () => {
    setSelectedMachine(null);
  };

  const filteredMachines = filteredData.filter((machine) =>
    machine.uniqueName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="searchBar">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value === "" ? "" : e.target.value)}
              placeholder="🔍 Search machine"
            />
            <div className="machineTopic">MACHINES BY DEPARTMENT</div>
          </div>
          <hr />
          <div
            className="contentMachines"
            style={{ overflowY: "auto", maxHeight: "75vh" }}
          >
            {filteredMachines.map((item) => (
              <div key={item.id} onClick={() => openModal(item)}>
                <MachineBox
                  image={item.image}
                  name={item.machinename}
                  department={item.departmentname}
                  description={item.smallDes}
                  URL={item.image}
                  uniqueName={item.uniqueName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedMachine && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2 className="modelName">
              {selectedMachine.machinename}{" "}
              <span className="subNameModel">#{selectedMachine.uniqueName}</span>
            </h2>
            <hr />
            <img className="modelImage" src={"http://localhost:8800/"+selectedMachine.image} alt="" />
            <hr />
            <h4 className="departmentNameModel">Department is {selectedMachine.departmentname}</h4>
            <h4 className="modelSmallDes">{selectedMachine.smallDes}</h4>
            <h4 className="modelBigDes">{selectedMachine.departmentdes}</h4>
            <div className="machineBoxURL">
              <a href={selectedMachine.URL} target="_blank">
                <button>↗️ USER MANUAL</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Machine;