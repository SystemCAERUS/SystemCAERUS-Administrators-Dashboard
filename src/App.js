import Home from "./pages/Dashboard/Home";
import Hr from "./pages/Notices/Hr";
import Add from "./pages/Notices/components/Add";
import "./App.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Update from "./pages/Notices/components/Update";

import { useAuthContext } from "@asgardeo/auth-react";
import { Route, BrowserRouter} from "react-router-dom";

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
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
