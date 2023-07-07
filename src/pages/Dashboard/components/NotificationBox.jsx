import React from 'react'

function NotificationBox() {
    const boxStyle = {
        background:
        "linear-gradient(to right,  rgb(255, 255, 243),  rgb(255, 255, 243))",
      };

  return (
    <div className='issues' style={boxStyle}>
      <div className='content'>
      SUMMARY (LAST 24H)
      </div>
    </div>
  )
}

export default NotificationBox
