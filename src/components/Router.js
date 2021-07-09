import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "../pages/Admin";

import Home from "../pages/Home";
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profil from '../pages/profil/Profil'
export default function Navigation() {
  return (
  
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/admin/gallery">
          <Admin />
        </Route>
        <Route exact path="/admin/add">
          <Admin />
        </Route>
        <Route exact path="/profile">
          <Profil />
        </Route>
      </Switch>
 
  );
}
