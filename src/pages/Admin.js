import React from "react";
import Addpost from "../Admin/Pages/Addpost";
import Gallery from "../Admin/Pages/Gallery";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../Admin/components/navbar";
export default function Admin() {
  let { path } = useRouteMatch();

  return (
    <>
      <Navbar />
      <Switch>
        <Route path={`${path}/add`}>
          <Addpost />
        </Route>
        <Route path={`${path}/gallery`}>
          <Gallery />
        </Route>
      </Switch>
    </>
  );
}
