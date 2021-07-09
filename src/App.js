import Navigation from "./components/Router";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
