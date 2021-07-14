import Layout from "./components/Layout";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { socket } from "./url";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // socket.emit("test", {
    //   s: Math.random() + "salam",
    // });

    // socket.on("test", (data) => console.log(data));
  });

  return (
    <div className="App">
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </div>
  );
}

export default App;
