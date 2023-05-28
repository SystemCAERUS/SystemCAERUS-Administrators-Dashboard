import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import { useHistory} from "react-router-dom";

const Home = () => {
  const history = useHistory();
  history.push("/hr");
  history.push("/");

  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className='content'>

          
        </div>
      </div>
    </div>
  )
}

export default Home
