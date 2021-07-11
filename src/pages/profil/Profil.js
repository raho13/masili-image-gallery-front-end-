import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import { useRecoilState } from "recoil";
import { isAuth } from "../../Atoms/global";
import AlertContainer, { Alert } from "../../Helpers/alert";
import "./profil.css";
import Avatar from "../../components/profile/Avatar";
export default function Profil() {
  const [state, setstate] = useRecoilState(isAuth);
  const [loading, setloading] = useState(false);
  const [password_confirm, setpassword_confirm] = useState("");
  const [errText, seterrText] = useState("");
  const [imgCheck, setimgCheck] = useState(false);
  const [resetData, setresetData] = useState({});
  const [data, setdata] = useState({
    avatar: {},
    username: "",
    email: "",
    about: "",
    phone: "",
    old_password: "",
    new_password: "",
    old_img_id: "",
  });
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = () => {
    axios
      .get("profile")
      .then((res) => {
        setdata({
          ...data,
          avatar: res.data.avatar,
          username: res.data.username,
          email: res.data.email,
          about: res.data.about,
          phone: res.data.phone,
          old_img_id: res.data.avatar.id,
        });
        setresetData(res.data);
        setloading(true);
      })
      .catch((err) => {
        setstate(false);
         window.location.href = "/";
      });
  };
  const Update = () => {
    setloading(false);
    if (!(password_confirm === data.new_password)) {
      seterrText("şifrələr uyğun deyil");
      Alert.info("şifrələr uyğun deyil");
    } else {
      seterrText("");
      axios
        .post(imgCheck ? "profile/image" : "profile", data)
        .then((res) => {
          window.location.reload();
          setloading(true);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setloading(true);
            Alert.error("Köhnə şifrə düzgün daxil edilməyib");
          }
        });
    }
  };
  return (
    <>
      {loading ? (
        <div className="container">
          <AlertContainer />
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <Avatar
                        data={data.avatar}
                        method={(e) => {
                          setdata({ ...data, avatar: e });
                          setimgCheck(true);
                        }}
                      />
                      <h5 className="user-name">{data.username}</h5>
                      <h6 className="user-email">{data.email}</h6>
                    </div>
                    <div className="about">
                      <h5 className="mb-2 text-primary">About</h5>
                      <p>{data.about}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    localStorage.setItem("masili", null);
                    setstate(false);
                    window.location.href = "/login";
                  }}
                  type="button"
                  className="btn btn-dark"
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-3 text-primary">Personal Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="fullName">Username</label>
                        <input
                          value={data.username}
                          type="text"
                          onChange={(e) => {
                            setdata({ ...data, username: e.target.value });
                          }}
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="eMail">Email</label>
                        <input
                          value={data.email}
                          type="email"
                          onChange={(e) => {
                            setdata({ ...data, email: e.target.value });
                          }}
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="phone">Telefon</label>
                        <input
                          onChange={(e) => {
                            setdata({ ...data, phone: e.target.value });
                          }}
                          value={data.phone}
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          placeholder="Telefon"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="phone">Haqqımda</label>
                        <textarea
                          type="text"
                          className="form-control"
                          onChange={(e) => {
                            setdata({ ...data, about: e.target.value });
                          }}
                          value={data.about}
                          placeholder="Haqqımda"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="sTate">Köhnə şifrə</label>
                        <input
                          onChange={(e) => {
                            setdata({ ...data, old_password: e.target.value });
                          }}
                          value={data.old_password}
                          type="password"
                          className="form-control"
                          placeholder="Köhnə şifrə"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="sTate">Yeni şifrə</label>
                        <input
                          type="password"
                          value={password_confirm}
                          onChange={(e) => {
                            setpassword_confirm(e.target.value);
                          }}
                          className="form-control"
                          placeholder="Yeni şifrə"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          {errText}
                        </small>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="zIp">Təkrar yeni şifrə</label>
                        <input
                          value={data.new_password}
                          type="password"
                          onChange={(e) => {
                            setdata({ ...data, new_password: e.target.value });
                          }}
                          className="form-control"
                          placeholder="Təkrar yeni şifrə"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          {errText}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right">
                        <button
                          onClick={() => {
                            setdata({
                              ...data,
                              username: resetData.username,
                              email: resetData.email,
                              about: resetData.about,
                              phone: resetData.phone,
                            });
                          }}
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-secondary"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            Update();
                          }}
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
