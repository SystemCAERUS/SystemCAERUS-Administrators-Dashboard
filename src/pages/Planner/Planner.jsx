import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./planner.scss";
import PlannerMsg from "./components/PlannerMsg";
import RadarChart from "./PlannerChart"

function Planner() {

  const [data, setData] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  function chartdataFiltering() {
    const uniqueDepartmentNames = [
      ...new Set(
        todos
          .filter((item) => item.status === 1)
          .map((item) => item.departmentname)
      ),
    ];
    setDepartment(uniqueDepartmentNames);

    const departmentCount = uniqueDepartmentNames.map((departmentName) => {
      const count = todos.filter(
        (item) => item.departmentname === departmentName && item.status === 1
      ).length;
      return count;
    });
    setData(departmentCount);
  }

  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/planner");
        setTodos(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedIssues();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      chartdataFiltering();
    }
  }, [isLoading]);


 /* const radarLabels = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];
  const radarData = [1, 2, 3, 4, 5];

  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchedTodos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/planner");
        /*const res = await fetchNotifications();
        setTodo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedTodos();
  }, []);*/

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="contentplanned">
          <div className="plannedworks">
            <div className="plannedtitle">Planned Maintainance Jobs</div>
            <div
              className="plannedpartscontent"
              style={{ overflowY: "auto", maxHeight: "90%" }}
            >
              <div className="plannedtableHeader">
                <tr>
                  <td className="planneddateH">Date</td>
                  <td className="plannedTask">Task</td>
                  <td className="plannedMachine">Machine</td>
                  <td className="plannedDepartment">Department</td>
                </tr>
              </div>

              {todos.length === 0 ? (
                <p className="noparts">No Todo Works</p>
              ) : (
                todos.map((item) =>
                  item.status === 1 ? (
                    <PlannerMsg
                    id={item.todoID}
                    dueDate={item.date}
                    todoMsg={item.msg}
                    todoMachineName={item.machinename}
                    todoDepartmentName={item.departmentname}
                    />
                  ) : null
                )
                  )}
            </div>
          </div>
          <div className="plannedAnalyticsManage">
            <div>
              <div className="plannedGraphTitle">
                Planned Tasks By Department
              </div>
              <div className="plannedGraph">
              <RadarChart labels={departments} data={data} />
              </div>
            </div>
            <div className="manageTitleContainer">
              <Link to="/planner/manage" style={{ textDecoration: "none" }}>
                <div className="manageTitle">Manage Planned Tasks</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planner;


