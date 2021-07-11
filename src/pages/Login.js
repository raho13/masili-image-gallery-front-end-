import axios from "axios";
import { useState } from "react";
import AlertContainer, { Alert } from "../Helpers/alert";
import { Link } from "react-router-dom";
import { isAuth } from "../Atoms/global";
import { useRecoilState } from "recoil";
export default function Login() {
  const [user, setuser] = useState({ email: "", password: "" });
  const [state, setstate] = useRecoilState(isAuth);
  const login = (e) => {
    e.preventDefault();
    axios
      .post("login", user)
      .then((res) => {
        localStorage.setItem("masili", res.data);
        window.location.href = "/";
        setstate(true);
      })
      .catch((err) => {
        Alert.error("email və ya şifə yanlışdır");
      });
  };
  return (
    <div className="container">
      <AlertContainer />
      <form
        className="mt-4"
        onSubmit={(e) => {
          login(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={user.email}
            onChange={(e) => {
              setuser({ ...user, email: e.target.value });
            }}
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      Hesabınız yoxdur?
      <Link style={{ paddingLeft: "10px" }} to="/register">
        Qeydiyyatdan keçin
      </Link>
    </div>
  );
}
