import Sidebar from "../../components/sidebar/Sidebar";
import "../Dashboard/home.scss";
import Navbar from "../../components/navbar/Navbar";
import "./issues.scss";
import LineChart from "./components/LineChart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import IssueMsg from "./components/IssueMsg"

function Issues() {
  const [data, setData] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [breakdowns, setTodo] = useState([]);

  function chartdataFiltering() {
    const uniqueDepartmentNames = [
      ...new Set(
        breakdowns
          .filter((item) => item.status === 1)
          .map((item) => item.departmentname)
      ),
    ];
    setDepartment(uniqueDepartmentNames);

    const departmentCount = uniqueDepartmentNames.map((departmentName) => {
      const count = breakdowns.filter(
        (item) => item.departmentname === departmentName && item.status === 1
      ).length;
      return count;
    });
    setData(departmentCount);
  }

  useEffect(() => {
    const fetchedTodos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/issues");
        setTodo(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedTodos();
  }, []);

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
        <div
          className="contentIssues"
          style={{ overflowY: "auto", maxHeight: "80%" }}
        >
          <div className="issuestable">
            <div className="issueParts">
              <div className="issueTitle">Current Breakdowns</div>
              <div
                className="issuePartsContent"
                style={{ overflowY: "auto", maxHeight: "54vh" }}
              >
                <div className="issuetableHeader">
                  <tr>
                    <td className="issueDate">Job ID</td>
                    <td className="issueDes">Description</td>
                    <td className="issueMachine">Machine</td>
                    <td className="issueDepartment">Department</td>
                    <td className="issueExp">Expereince</td>
                    <td className="issueP">Priority</td>
                  </tr>
                </div>

                {breakdowns.length === 0 ? (
                  <p className="noparts">No Breakdowns</p>
                ) : (
                  breakdowns.map((item) =>
                    item.status === 1 ? (
                      <IssueMsg
                        issueID={item.issueID}
                        issueMsg={item.des}
                        issueMachineName={item.machinename}
                        issueDepartmentName={item.departmentname}
                        issueExp={item.expEmployee}
                        issuePrio={item.priority}
                      />
                    ) : null
                  )
                )}
              </div>
            </div>
          </div>
          <div className="lineChartManage">
            <div className="lineChart">
              <LineChart labels={departments} data={data} />
            </div>
            <div className="manageIssues">Manage Issues</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Issues;
