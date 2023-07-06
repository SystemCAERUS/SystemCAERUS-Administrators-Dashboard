import React from "react";

function ReportIssue() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">Report Generation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportIssue;
