import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./chat.scss";
import ChatNavBar from "./component/Navbar"
import { auth } from "../../firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import ChatBox from './component/Chat'

function Chat() {
  const [user] = useAuthState(auth)
  console.log(user)
  
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="chat-box">
          <div>
            <section>
              {/*Navbar*/}
              <ChatNavBar/>
              <ChatBox/>
              {/*Chat*/}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
