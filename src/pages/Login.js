import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
    const [user, setuser] = useState({ email: '', password: '' })
    const login = (e) => {
        e.preventDefault();
        axios.post('login', user)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("masili", res.data)
                window.location.href = '/'
            })
            .catch((err) => {
                toast.error("email və ya şifə yanlışdır", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            })
    }
    return (
        <div className="container">
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
            <form className="mt-4" onSubmit={(e) => {
                login(e)
            }}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={user.email} onChange={(e) => { setuser({ ...user, email: e.target.value }) }} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}
