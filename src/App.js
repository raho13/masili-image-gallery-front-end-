import Layout from "./components/Layout";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </div>
  );
}

export default App;
