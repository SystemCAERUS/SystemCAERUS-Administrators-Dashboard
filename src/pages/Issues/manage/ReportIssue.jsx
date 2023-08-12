import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import ReportMsg from "../components/ReportMsg";
import axios from "axios";
import "./reportIssue.scss";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ReportIssue() {
  const [breakdowns, setBreakdowns] = useState([]);
  const [loader, setLoader] = useState(false);


  const downloadPDF = () => {
    const capture = document.querySelector('.issuestable');
  
    capture.style.width = '1200px';
    capture.style.height = '1000px';

    setLoader(true);
    html2canvas(capture).then((canvas) => {
      capture.style.width = '';
      capture.style.height = '';
  
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('1', 'mm', 'a0');
  
      const pdfWidth = 840;
      const pdfHeight = 1000;
  
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      setLoader(false);
      doc.save('FixedIssues.pdf');
    });
  };


  const calculateTimeDifference = (closingTime, addTime) => {
    const closingDate = new Date(closingTime);
    const addDate = new Date(addTime);
    const timeDifferenceMs = closingDate - addDate;
  
    // Convert the time difference to a readable format
    const seconds = Math.floor(timeDifferenceMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return `${days}D - ${hours % 24}H - ${minutes % 60}m`;
  };


  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/issues");
        setBreakdowns(res.data);
        //setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedIssues();
  }, []);

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="issuestable">
              <div className="issueParts">
                <div className="issueTitle">Fixed Issues (Report)</div>
                <div
                  className="issuePartsContent"
                  style={{ overflowY: "auto", maxHeight: "54vh" }}
                >
                  <div className="issuetableHeader">
                    <tr>
                      <td className="issueDate">Down Time</td>
                      <td className="issueDes">Description</td>
                      <td className="issueMachine">Machine</td>
                      <td className="issueDepartment">Department</td>
                      <td className="issueExp">Employee</td>
                      <td className="issueP">Issue ID</td>
                    </tr>
                  </div>

                  {breakdowns.length === 0 ? (
                    <p className="noparts">No Breakdowns</p>
                  ) : (


                    breakdowns.map((item) =>
                      item.status === 0 ? (
                        <ReportMsg
                          issueID={item.issueID}
                          issueMsg={item.des}
                          issueMachineName={item.machinename}
                          issueDepartmentName={item.departmentname}
                          issueExp={item.finishedWorkers}
                          issuePrio={calculateTimeDifference(item.closingTime,item.addTime)}
                        />
                      ) : null
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="button-report">
              <button
                className="IssuesAddButtonAddPage"
                onClick={downloadPDF}
                disabled={!(loader === false)}
              >
                {loader ? (
                  <span> Creating PDF</span>
                ) : (
                  <span> DOWNLOAD PDF</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportIssue;
