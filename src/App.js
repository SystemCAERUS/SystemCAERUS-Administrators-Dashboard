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
import ManageEmployee from "./pages/Employee/ManageEmployee"
import ManageDepartment from "./pages/Map/ManageDepartment";
import ManageMachines from "./pages/Map/ManageMachines";
import ManageJobPositions from "./pages/Map/ManageJobPositions";
import AddDepartment from "./pages/Map/Manage/AddDepartment";
import UpdateDepartment from "./pages/Map/Manage/UpdateDepartment";
import HideDepartment from "./pages/Map/Manage/HideDepartment"
import AddJobPositions from "./pages/Map/Manage/AddJobPosition";
import AddMachine from "./pages/Map/Manage/AddMachine";
import UpdateMachine from "./pages/Map/Manage/UpdateMachine";

import CloseMachine from "./pages/Map/Manage/RemoveMachine";
import ManagePlanned from "./pages/Planner/ManagePlanned";
import EquipmentPlanned from "./pages/Equipment/EquipmentPlanned";
import HideJobPosition from "./pages/Map/Manage/HideJobPosition";
import UpdateJobPosition from "./pages/Map/Manage/UpdateJob";
import FormAddEmployee from "./pages/Employee/Manage/FormAdd"
import FormCloseEmployee from "./pages/Employee/Manage/FormClose";
import FormUpdateEmployee from "./pages/Employee/Manage/FormUpdate"
import FormAddEquipment from "./pages/Equipment/Manage/FormAdd"
import FormCloseEquipment from "./pages/Equipment/Manage/FormClose";
import FormUpdateEquipment from "./pages/Equipment/Manage/FormUpdate"
import FromClosePlanner from "./pages/Planner/manage/FormClose";
import FromOpenPlanner from "./pages/Planner/manage/FormOpen";
import FromUpdatePlanner from "./pages/Planner/manage/FormUpdate";
import FromReportPlanner from "./pages/Planner/manage/FormReport";

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
            <Route exact path="/planner/manage">
              <ManagePlanned/>
            </Route>
            <Route exact path="/planner/manage/close">
              <FromClosePlanner/>
            </Route>
            <Route exact path="/planner/manage/open">
              <FromOpenPlanner/>
            </Route>
            <Route exact path="/planner/manage/update">
              <FromUpdatePlanner/>
            </Route>
            <Route exact path="/planner/manage/report">
              <FromReportPlanner/>
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
            <Route exact path="/map/machines">
              <ManageMachines/>
            </Route>
            <Route exact path="/map/machines/add">
              <AddMachine/>
            </Route>
            <Route exact path="/map/machines/close">
              <CloseMachine/>
            </Route>
            <Route exact path="/map/machines/update">
              <UpdateMachine/>
            </Route>
            <Route exact path="/map/departments">
              <ManageDepartment/>
            </Route>
            <Route exact path="/map/positions">
              <ManageJobPositions/>
            </Route>
            <Route exact path="/map/positions/add">
            <AddJobPositions/>
            </Route>
            <Route exact path="/map/positions/hide">
              <HideJobPosition/>
            </Route>
            <Route exact path="/map/positions/update">
              <UpdateJobPosition/>
            </Route>
            <Route exact path="/map/departments/add">
              <AddDepartment/>
            </Route>
            <Route exact path="/map/departments/update">
              <UpdateDepartment/>
            </Route>
            <Route exact path="/map/departments/hide">
              <HideDepartment/>
            </Route>
            <Route exact path="/employees">
              <Employee />
            </Route>
            <Route exact path="/employees/manage">
              <ManageEmployee/>
            </Route>
            <Route exact path="/employees/manage/open">
              <FormAddEmployee/>
            </Route>
            <Route exact path="/employees/manage/update">
              <FormUpdateEmployee/>
            </Route>
            <Route exact path="/employees/manage/close">
              <FormCloseEmployee/>
            </Route>
            <Route exact path="/equipment">
              <Equipment />
            </Route>
            <Route exact path="/equipment/manage">
              <EquipmentPlanned/>
            </Route>
            <Route exact path="/equipment/manage/open">
              <FormAddEquipment/>
            </Route>
            <Route exact path="/equipment/manage/close">
              <FormCloseEquipment/>
            </Route>
            <Route exact path="/equipment/manage/update">
              <FormUpdateEquipment/>
            </Route>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
