import { io } from "socket.io-client";

 export const baseURL = "http://localhost:4000/";
//export const baseURL = "https://masili-api.herokuapp.com/";
export const socket = io(baseURL);
