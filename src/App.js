import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Router path="/" exact={true}>
          <Dashboard></Dashboard>
        </Router>
        <Router path="/login">
          <Login />
        </Router>
        <Router>
          <Error />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
