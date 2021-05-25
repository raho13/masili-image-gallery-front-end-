import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "../pages/Admin";

import Home from "../pages/Home";

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}
