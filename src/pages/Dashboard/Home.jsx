import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { useHistory } from "react-router-dom";
import Issues from "./components/Issues";
import PlannedWorkBox from "./components/PlannedWorkBox";
import EquipmentFixBox from "./components/EquipmentFixBox";
import NoticesBox from "./components/NoticesBox";
import NotificationBox from "./components/NotificationBox";
import BarChart from "./components/BarChart"
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [breakdowns, setBreakdowns] = useState([]);

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
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/issues");
        setBreakdowns(res.data);
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

  const history = useHistory();
  history.push("/hr");
  history.push("/");

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="content">
          <Issues />
          <PlannedWorkBox/>
          <EquipmentFixBox/>
          <NoticesBox/>
          <NotificationBox/>
        </div>
        <div className="homeChart">
          <BarChart labels={departments} data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
