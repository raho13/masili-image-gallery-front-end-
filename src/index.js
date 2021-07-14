import React from "react";
import ReactDOM from "react-dom";
import "./style/min.css";
import "./style/App.css";
import "./style/costom.css";
import {baseURL} from './url'
import App from "./App";
import axios from "axios";
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["auth"] = localStorage.getItem("masili");
ReactDOM.render(<App />, document.getElementById("root"));
