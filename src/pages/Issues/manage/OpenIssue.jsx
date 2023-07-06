import React from "react";

function OpenIssue() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="hrwrapper">
            <div className="title">
              <span className="notification">Open a Breakdown</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenIssue;
