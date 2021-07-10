import axios from "axios";
import { useState } from "react";
import { isAuth } from "../Atoms/global";
import AlertContainer, { Alert } from "../Helpers/alert";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
export default function Register() {
  const [state, setstate] = useRecoilState(isAuth);
  const [user, setuser] = useState({ username: "", email: "", password: "" });
  const [password_confirm, setpassword_confirm] = useState("");
  const [errText, seterrText] = useState("");
  const login = (e) => {
    e.preventDefault();

    if (!(password_confirm === user.password)) {
      seterrText("sifreler uygun deyil");
    } else {
      seterrText("");

      axios
        .post("register", user)
        .then((res) => {
          localStorage.setItem("masili", res.data);
          setstate(true);
          window.location.href = "/";
        })
        .catch((err) => {
          if (err.response.status === 401) {
            Alert.error("Bu email artıq istifadə olunub");
          } else {
            Alert.error(`${err.response.data.split(" ")[0]} boş qala bilməz`);
          }
        });
    }
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
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            value={user.username}
            onChange={(e) => {
              setuser({ ...user, username: e.target.value });
            }}
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Username"
          />
        </div>
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
          <small id="emailHelp" className="form-text text-muted">
            {errText}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm-Password</label>
          <input
            value={password_confirm}
            onChange={(e) => setpassword_confirm(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Confirm-Password"
          />
          <small id="emailHelp" className="form-text text-muted">
            {errText}
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      Hesabınız var?
      <Link style={{ paddingLeft: "10px" }} to="/login">
        Giriş edin
      </Link>
    </div>
  );
}
