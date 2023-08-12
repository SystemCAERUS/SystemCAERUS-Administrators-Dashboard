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
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const filteredData = machines.filter(
    (item) => item.hideMachine === 0 &&
    (!selectedDepartment || item.departmentid === selectedDepartment.departmentid)
  );

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

  const handleDepartmentSelect = (departmentId) => {
    // Find the selected department based on the department ID
    const selectedDept = machines.find((item) => item.departmentid === departmentId);
    setSelectedDepartment(selectedDept);
  };

  // Custom function to get unique departments
  const getUniqueDepartments = (data) => {
    const departmentsSet = new Set();
    const uniqueDepartments = [];
    data.forEach((item) => {
      if (!departmentsSet.has(item.departmentid)) {
        departmentsSet.add(item.departmentid);
        uniqueDepartments.push(item);
      }
    });
    return uniqueDepartments;
  };

  const departments = getUniqueDepartments(machines);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="hrwrapper">
          <div className="searchBar">
            <select
              value={selectedDepartment ? selectedDepartment.departmentid : ""}
              onChange={(e) => handleDepartmentSelect(Number(e.target.value))}
              style={{
                backgroundColor: "#f2f2f2",
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#333",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="">All Departments</option>
              {departments.map((department) => (
                <option key={department.departmentid} value={department.departmentid}>
                  {department.departmentname}
                </option>
              ))}
            </select>
            <div className="machineTopic">MACHINES BY DEPARTMENT</div>
          </div>
          <hr />
          <div
            className="contentMachines"
            style={{ overflowY: "auto", maxHeight: "75vh" }}
          >
            {filteredData.map((item) => (
              <div key={item.machineid} onClick={() => openModal(item)}>
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
