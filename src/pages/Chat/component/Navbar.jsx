import React from 'react'
import {auth} from '../../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './Signin';
import LogOut from './LogOut';

function Navbar() {

  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>CHAT APP</h1>
      {user ? <LogOut/> : <SignIn/>}
    </div>
  )
}

export default Navbar
