import Home from './pages/home/Home'
import Login from './pages/login/Login'
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
