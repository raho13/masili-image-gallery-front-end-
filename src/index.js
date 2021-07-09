import React from "react";
import ReactDOM from "react-dom";
import "./style/min.css";
import "./style/App.css";
import "./style/costom.css";
import App from "./App";
import axios from 'axios'
axios.defaults.baseURL = "https://masili-api.herokuapp.com/";
axios.defaults.headers.common["auth"] = localStorage.getItem("masili");
ReactDOM.render(<App />, document.getElementById("root"));
