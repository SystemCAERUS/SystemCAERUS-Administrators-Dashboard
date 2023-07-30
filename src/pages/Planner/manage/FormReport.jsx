import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import ReportMsg from "./PlannerReportMsg";
import axios from "axios";
import "../../Issues/manage/reportIssue.scss";
import "./plannerReport.scss"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { PDFDocument, rgb } from "pdf-lib";

function ReportPlanner() {
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
      doc.save('Completed_Planned_Tasks.pdf');
    });
  };



  useEffect(() => {
    const fetchedIssues = async () => {
      try {
        const res = await axios.get("http://localhost:8800/planner");
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
                <div className="issueTitle">Completed Planned Tasks (Report)</div>
                <div
                  className="issuePartsContent"
                  style={{ overflowY: "auto", maxHeight: "54vh" }}
                >
                  <div className="issuetableHeader">
                    <tr>
                      <td className="issueDate" style={{ width: '10%', borderRight: 'none'}}>Job ID</td>
                      <td className="issueDes" style={{ width: '40.3%', borderRight: 'none' }}>Description</td>
                      <td className="issueMachine" style={{ width: '14.7%' , borderRight: 'none'}}>Machine</td>
                      <td className="issueP" style={{ width: '15%' , borderRight: 'none'}}>UID</td>
                      <td className="issueDepartment" style={{ width: '15%' , borderRight: 'none'}}>Department</td>
                      <td className="issueExp" style={{ width: '10%', borderRight: 'none' }}>Employee</td>
                      
                    </tr>
                  </div>

                  {breakdowns.length === 0 ? (
                    <p className="noparts">No Breakdowns</p>
                  ) : (


                    breakdowns.map((item) =>
                      item.status === 0 ? (
                        <ReportMsg
                          issueID={item.todoID}
                          issueMsg={item.msg}
                          issueMachineName={item.machinename}
                          issuePrio={item.uniqueName}
                          issueDepartmentName={item.departmentname}
                          issueExp={item.finishEmployees}
                          
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

export default ReportPlanner;

