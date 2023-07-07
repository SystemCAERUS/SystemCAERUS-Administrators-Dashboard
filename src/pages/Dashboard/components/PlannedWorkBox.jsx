import React, { useEffect, useState } from "react";
import "./issues.scss";
import axios from "axios";

function PlannedWorkBox() {
  const [breakdowns, setBreakdowns] = useState([]);

  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/planner");
        setBreakdowns(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedIssues();
  }, []);

  const getItemsCount = () => {
    const itemsWithStatus1 = breakdowns.filter((item) => item.status === 1);
    return itemsWithStatus1.length;
  };

  return (
    <div className="issues">
      <div className="content">
        <p>
          <span className="numberText">#{getItemsCount()}</span>FUTURE PLANNED
          TASKS
        </p>
      </div>
    </div>
  );
}

export default PlannedWorkBox;
