import Home from "./pages/Dashboard/Home";
import Hr from "./pages/Notices/Hr";
import Add from "./pages/Notices/components/Add";
import "./App.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Update from "./pages/Notices/components/Update";
import { useAuthContext } from "@asgardeo/auth-react";
import { Route, BrowserRouter } from "react-router-dom";
import Machines from "./pages/Machinery/Machines";
import Planner from "./pages/Planner/Planner";
import Issues from "./pages/Issues/Issues";
import Chat from "./pages/Chat/Chat";
import Map from "./pages/Map/Map";
import Employee from "./pages/Employee/Employee";
import Equipment from "./pages/Equipment/Equipment";
import ManageIssues from "./pages/Issues/manage/Manage"
import OpenIssue from "./pages/Issues/manage/OpenIssue"
import CloseIssue from "./pages/Issues/manage/CloseIssue"
import UpdateIssue from "./pages/Issues/manage/UpdateIssue"
import ReportIssue from "./pages/Issues/manage/ReportIssue"

function App() {
  const { state, signIn } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="App">
        {!state.isAuthenticated ? (
          <div className="splash">
            <h1 className="title">System CAERUS</h1>
            <button className="button" onClick={() => signIn()}>
              <CheckCircleOutlineIcon className="signin" />
            </button>
          </div>
        ) : (
          <div>
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

            <Route exact path="/machines">
              <Machines />
            </Route>
            <Route exact path="/planner">
              <Planner />
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route exact path="/issues">
              <Issues />
            </Route>
            <Route exact path="/issues/manage">
              <ManageIssues/>
            </Route>
            <Route exact path="/issues/manage/open">
              <OpenIssue/>
            </Route>
            <Route exact path="/issues/manage/close">
              <CloseIssue/>
            </Route>
            <Route exact path="/issues/manage/update">
              <UpdateIssue/>
            </Route>
            <Route exact path="/issues/manage/report">
              <ReportIssue/>
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/employees">
              <Employee />
            </Route>
            <Route exact path="/equipment">
              <Equipment />
            </Route>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
