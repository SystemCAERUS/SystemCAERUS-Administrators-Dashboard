import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import ClockWidget from './components/Clock'
import Issues from './components/Issues'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className='content'>
          
          <Issues/>
          
        </div>
      </div>
    </div>
  )
}

export default Home
