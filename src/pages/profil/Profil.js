import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "./profil.css";
export default function Profil() {
  const [loading, setloading] = useState(false);
  const [password_confirm, setpassword_confirm] = useState("");
  const [errText, seterrText] = useState("");
  const [resetData, setresetData] = useState({});
  const [data, setdata] = useState({
    username: "",
    email: "",
    about: "",
    phone: "",
    old_password: "",
    new_password: "",
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
          username: res.data.username,
          email: res.data.email,
          about: res.data.about,
          phone: res.data.phone,
        });
        setresetData(res.data);
        setloading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Update = () => {
    if (!(password_confirm === data.new_password)) {
      seterrText("sifreler uygun deyil");
    } else {
      seterrText("");
      axios
        .post("profile", data)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          if (err.response.status === 401)
            toast.error("Köhnə şifrə düzgün daxil edilməyib", {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
        });
    }
  };
  return (
    <>
      {loading ? (
        <div className="container" onClick={()=>{
          console.log(data)
        }}>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 className="user-name">{data.username}</h5>
                      <h6 className="user-email">{data.email}</h6>
                    </div>
                    <div className="about">
                      <h5 className="mb-2 text-primary">About</h5>
                      <p>{data.about}</p>
                    </div>
                  </div>
                </div>
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