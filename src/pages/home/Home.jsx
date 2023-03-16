import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import HomeContainer from './HomeContainer'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <HomeContainer/>
    </div>
  )
}

export default Home
