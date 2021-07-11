import Layout from "./components/Layout";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";
import { useEffect } from "react";
function App() {
  const socket = io("http://localhost:4000");
  useEffect(() => {
    socket.emit("test", {
      s: "salam socket",
      f: "ilk user",
    });
    socket.on("test", (data) => console.log(data));
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
