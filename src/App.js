import Home from "./pages/Dashboard/Home";
import Home from "./pages/Dashboard/Home";
import Hr from "./pages/Notices/Hr";
import Add from "./pages/Notices/components/Add";
import "./App.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Update from "./pages/Notices/components/Update";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hr from "./pages/Notices/Hr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hr">
            <Hr />
          </Route>
          <Route exact path="/hr/add">
            <Add />
          </Route>
          <Route exact path="/hr/update/:id">
            <Update />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
