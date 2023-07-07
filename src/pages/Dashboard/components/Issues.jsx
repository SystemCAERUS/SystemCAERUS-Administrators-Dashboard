import React, { useEffect, useState } from "react";
import './issues.scss'
import axios from "axios";

function Issues() {
  const [breakdowns, setBreakdowns] = useState([]);

  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/issues");
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
    <div className='issues'>
      <div className='content'>
       <p><span className="numberText">#{getItemsCount()}</span>ACTIVE BREAKDOWNS</p>
      </div>
    </div>
  )
}

export default Issues
