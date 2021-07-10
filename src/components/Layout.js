import Navigation from "../components/Router";
import Navbar from "../components/navbar";
import { useLayoutEffect } from "react";
import { isAuth } from "../Atoms/global";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [state, setstate] = useRecoilState(isAuth);
  useLayoutEffect(() => {
    if (
      !(localStorage.getItem("masili") === null) ||
      localStorage.getItem("masili").length > 10
    ) {
      setstate(true);
    }
  }, []);

  return (
    <>
      {state ? (
        <Router>
          <Navbar />
          <Navigation />
        </Router>
      ) : null}
    </>
  );
}

export default App;
