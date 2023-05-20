import React from "react";
import ClockLive from "react-live-clock";
import "./clock.scss";

function Clock() {
  return (
    <div className="clock">
      <div className="title">Time</div>
      <div className="timeLive">
        <ClockLive
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"Asia/Kolkata"}
        />
      </div>
    </div>
  );
}

export default Clock;
