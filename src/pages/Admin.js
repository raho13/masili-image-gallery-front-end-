import Addpost from "../Admin/Pages/Addpost";
import Gallery from "../Admin/Pages/Gallery";
import { Switch, Route } from "react-router-dom";
import Navbar from "../Admin/components/navbar";
export default function Admin() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/admin/gallery'>
          <Gallery />
        </Route>
        <Route path='/admin/add'>
          <Addpost />
        </Route>
      </Switch>
    </>
  );
}
