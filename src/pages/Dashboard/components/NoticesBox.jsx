import React from 'react'

function NoticesBox() {
    const boxStyle = {
        background:
        "linear-gradient(to right,  rgb(255, 255, 243),  rgb(255, 255, 243))",
      };

  return (
    <div className='issues' style={boxStyle}>
      <div className='content'>
      # {/*getItemsCount()*/} - ACTIVE BREAKDOWNS
      </div>
    </div>
  )
}

export default NoticesBox
