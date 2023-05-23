import React from 'react'
import './navbar.scss'
import ClockLive from "react-live-clock";
import Logo from "../sidebar/logowilmar.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuthContext } from "@asgardeo/auth-react";

function Navbar() {
  const { state, signIn, signOut } = useAuthContext();

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
      {state.isAuthenticated ? (
          <button className='signout' onClick={() => signOut()}>Sign Out</button>
          
        ) : (<p></p>)}
      <li>{state.username}</li>
      <img src="https://media.licdn.com/dms/image/D5603AQEft-FC8YiO8Q/profile-displayphoto-shrink_800_800/0/1672297319886?e=1687996800&v=beta&t=T3cb3lqqo4D9qIkPE27ayUrycudMI5iCEJYuVDnCwdw" alt="Avatar" class="avatar"></img>
    </div>
  )
}

export default Navbar
