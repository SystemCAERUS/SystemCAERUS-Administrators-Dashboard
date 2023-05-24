import React from "react";
import App from "./App";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";

const Index = () => (
  <AuthProvider
    config={{
      signInRedirectURL: "http://localhost:3000/",
      signOutRedirectURL: "http://localhost:3000/",
      clientID: "fLZPOjpC2sp4bJaf6Xh2OyHsYt0a",
      baseUrl: "https://api.asgardeo.io/t/systemcaerusproject",
      scope: ["openid", "profile"],
    }}
  >
    {/* Rest of your application.  */ <App />}
  </AuthProvider>
);

render(<Index />, document.getElementById("root"));
