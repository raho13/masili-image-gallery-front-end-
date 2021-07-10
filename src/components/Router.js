import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useRecoilState } from "recoil";
import { isAuth } from "../Atoms/global";
import Profil from "../pages/profil/Profil";
export default function Navigation() {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <ProtectedRoute exact component={Profil} path="/profile" />
      <Route exact component={Login} path="/login" />
      <Route exact component={Register} path="/register" />
      <Route exact component={Admin} path="/admin/gallery" />
      <Route exact component={Admin} path="/admin/add" />
    </Switch>
  );
}
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [state, setstate] = useRecoilState(isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (state) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
