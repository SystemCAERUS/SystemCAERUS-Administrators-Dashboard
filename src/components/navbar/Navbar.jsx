import React from 'react'
import './navbar.scss'
import Face6Icon from "@mui/icons-material/Face6";

function Navbar() {
  return (
    <div className='navbar'>
      <div className="user">
        <Face6Icon className="icon"/>
        <span className='username'>Janithlahirukariyawasam</span>
      </div>
    </div>
  )
}

export default Navbar
