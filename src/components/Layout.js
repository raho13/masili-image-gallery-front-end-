import Navigation from "../components/Router";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { isAuth } from "../Atoms/global";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function App() {
  const [state, setstate] = useRecoilState(isAuth);
  const [tepmlate, settepmlate] = useState(false);
  useEffect(() => {
    axios
      .get("profile")
      .then((res) => {
        setstate(true);
        settepmlate(true);
      })
      .catch((err) => {
        console.log(err);
        settepmlate(true);
      });
  }, []);

  return (
    <>
      {tepmlate ? (
        <Router>
          <Navbar />
          <Navigation />
        </Router>
      ) : null}
    </>
  );
}

export default App;
