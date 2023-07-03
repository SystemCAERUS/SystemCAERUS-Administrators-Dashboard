import React from 'react'
import './navbar.scss'
import ClockLive from "react-live-clock";
import Logo from "../sidebar/logowilmar.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuthContext } from "@asgardeo/auth-react";

function Navbar() {
  const { state,  signOut } = useAuthContext();

  return (
    <div className='navbar'>
      <div className="timeLive">
        <ClockLive
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"Asia/Kolkata"}
        />
      </div>
      <div className="bottom">
        <a href="https://pyramidwilmar.com/" target="_blank">
          <img className="wilmar-logo" src={Logo} alt="alternatetext" />
        </a>
      </div>
      <NotificationsIcon className='notification'/>
      <a href="https://console.asgardeo.io/t/systemcaerusproject/manage/users" target="_blank">
      <button className='superadmin'>Super Admin</button>
      </a>
      
      {state.isAuthenticated ? (
          <button className='signout' onClick={() => signOut()}>Sign Out</button>
          
        ) : (<p></p>)}
      {/*<li>{state.username}</li>*/}
      <img src="https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?pid=ImgDet&rs=1" alt="Avatar" class="avatar"></img>
    </div>
  )
}

export default Navbar
