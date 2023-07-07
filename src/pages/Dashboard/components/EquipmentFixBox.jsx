import React, { useEffect, useState } from "react";
import "./issues.scss";
import axios from "axios";

function EquipmentFixBox() {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/repairs");
        setRepairs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedIssues();
  }, []);

  const getItemsCount = () => {
    const itemsWithStatus1 = repairs.filter((item) => item.status === 1);
    return itemsWithStatus1.length;
  };

  return (
    <div className="issues">
      <div className="content">
        <p>
          <span className="numberText">#{getItemsCount()}</span>PARTS UNDER
          REPAIR
        </p>
      </div>
    </div>
  );
}

export default EquipmentFixBox;
