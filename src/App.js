import { useAuthContext } from "@asgardeo/auth-react";


import Home from "./pages/home/Home";


import { Route, BrowserRouter, Switch } from "react-router-dom";
import Hr from "./pages/hr/Hr";

function App() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="App">
        {!state.isAuthenticated ? (
          <button onClick={() => signIn()}>Login</button>
        ) : (
          <div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/hr">
              <Hr />
            </Route>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;

