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

  const filteredMachines = machines.filter((machine) =>
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
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Search machine"
            />
            <div className="machineTopic">Machines</div>
          </div>
          <div
            className="contentMachines"
            style={{ overflowY: "auto", maxHeight: "75vh" }}
          >
            {filteredMachines.map((item) => (
              <div key={item.id} onClick={() => openModal(item)}>
                <MachineBox
                  image={item.image}
                  name={item.machinename}
                  department={item.departmentid}
                  description={item.departmentdes}
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
            <h2>{selectedMachine.machinename}</h2>
            <img src={selectedMachine.image} alt="" />
            <p>{selectedMachine.description}</p>
            <a href={selectedMachine.URL}>More details</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Machine;
