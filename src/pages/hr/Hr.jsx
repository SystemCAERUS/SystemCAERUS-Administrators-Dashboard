import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import '../home/home.scss'
import './hr.scss'

function Hr() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
          <div className='hrwrapper'>
            <div className="title">
              <span className='notification'>Notifications</span>
            </div>
            <div className="content">
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hr
