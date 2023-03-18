import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import '../home/home.scss'
import Navbar from '../../components/navbar/Navbar'

const Login = () => {
  return (
    <div className='login'>
    <Sidebar/>
    <div className="homeContainer">
      <Navbar/>
      Login
    </div>
  </div>
  )
}

export default Login
