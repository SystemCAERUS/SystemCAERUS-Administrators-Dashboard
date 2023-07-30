import React from "react";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./Signin";
import LogOut from "./LogOut";
import "./generalChat.scss";

function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <div className="chatHeading">
      <h1 className="chatTitle">SystemCAERUS Chat Portal</h1>
      <div className="buttonGoogle">{user ? <LogOut /> : <SignIn />}</div>
    </div>
  );
}

export default Navbar;
