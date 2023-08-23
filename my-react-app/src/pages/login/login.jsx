import React, { useEffect, useRef, useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.scss";
import logo from "../../../assets/logo.svg";
//import affect from "../../../assets/test.svg";
import { validateEmail, validatePassword } from "./../../function/functions";

function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    //const navigate = useNavigate();
    const x_email = useRef(null);
    const x_passw = useRef(null);

    useEffect(() => {

        x_email.current.focus();

    }, []);


    const x_Submit = (e) => {

        e.preventDefault();

        let Vemail = false;
        let Vpass = false;

        validateEmail(email)
            ? (Vemail = true)
            : x_email.current.classList.add("d");
        validatePassword(password)
            ? (Vpass = true)
            : x_passw.current.classList.add("d");

        if (Vemail && Vpass) {
            let formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            formData.append("remember", remember);

            axios
                .post("http://127.0.0.1:8000/api/login", formData)
                .then(function (response) {

                   console.log(response.data.email)
                   localStorage.setItem("login", response.data.email);
                   //location.reload();
                   window.location.replace("/");

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    return (
        <>
            <main className="login_page">
                <div className="p1">
                    <div className="box">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Odio, nisi.
                        </p>
                    </div>
                </div>
                <div className="p2">
                    <div className="container">
                        <div className="logo">
                            <img src={logo} alt="hi" width="80" height="80" />
                        </div>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <div className="form_div">
                            <form onSubmit={x_Submit}>
                                <div className="div_form">
                                    <label>Email address</label>
                                    <i className="material-symbols-outlined">
                                        mail
                                    </i>
                                    <input
                                        ref={x_email}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter email"
                                        name="email"
                                        autoComplete="off"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            e.target.classList.remove("d");
                                        }}
                                    ></input>
                                </div>
                                <div className="div_form">
                                    <label>Password</label>
                                    <i className="material-symbols-outlined">
                                        lock
                                    </i>
                                    <input
                                        ref={x_passw}
                                        type="password"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Password"
                                        name="pass"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            e.target.classList.remove("d");
                                        }}
                                    ></input>
                                </div>
                                <div
                                    className="checkbox_div"
                                    onClick={() => {
                                        setRemember(!remember);
                                    }}
                                >
                                    <div
                                        className={
                                            remember
                                                ? "checkbox checkbox_active"
                                                : "checkbox"
                                        }
                                    >
                                        <i></i>
                                    </div>
                                    <span>Remember Me</span>
                                </div>

                                <button>login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default login;
