import React, { useEffect, useState } from "react";
import './issues.scss'
import axios from "axios"

function NoticesBox() {
 
      const [notices, setNotices] = useState([]);

      useEffect(() => {
        const fetchedIssues = async () => {
          try {
            const res = await axios.get("http://localhost:8800/hr");
            setNotices(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchedIssues();
      }, []);
    
      const getItemsCount = () => {
        return notices.length;
      };

  return (
    <div className='issues' >
      <div className='content'>
      <p><span className="numberText" >#{getItemsCount()}</span>NOTICES FOR WORKERS</p>
      </div>
    </div>
  )
}

export default NoticesBox
