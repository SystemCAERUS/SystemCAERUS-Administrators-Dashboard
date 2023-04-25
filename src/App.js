import { useAuthContext } from "@asgardeo/auth-react";
import Auth from "./Auth";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Hr from "./pages/hr/Hr";

function App() {
  const { state, signIn } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="App">
        {!state.isAuthenticated ? (
          <button onClick={() => signIn()}>Login</button>
        ) : (
          <div>
            <Home/>
            <Switch>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/hr" element={<Hr />} />
              <Route path="/users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="/products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Switch>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
