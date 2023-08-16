import React, { useState } from "react";
import axios from "axios";
import "./css/login.scss";
import logo from '../../../assets/logo.svg';
import affect from '../../../assets/test.svg';

function login() {
    const [email, setEmail] = useState("");

    const test = (e) => {
        setEmail(e.target.value);
    };

    const sendData = () => {
        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
                email_x: email,
            })
            .then(function (response) {
                //console.log(response);
                console.log("send");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <main>

                <div className="p1">
                    <img src={affect} alt="hh" />
                    <div className="box">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, nisi.</p>
                    </div>

                </div>
                <div className="p2">
                    <div className="container">
                        <div className="logo">
                            <img src={logo} alt="hi" width="80" height="80" />
                        </div>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <div className="form_div">
                            <form>
                                <div className="div_form">
                                    <label>Email address</label>
                                    <input
                                        onKeyDown={(e) => {
                                            test(e);
                                        }}
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="enter email"
                                    ></input>
                                </div>
                                <div className="div_form">
                                    <label>Email address</label>
                                    <input
                                        onKeyDown={(e) => {
                                            test(e);
                                        }}
                                        type="password"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="password"
                                    ></input>
                                </div>
                                <div className="checkbox_div">
                                   <div className="checkbox">

                                   </div>
                                   <span>Lorem, ipsum.</span>
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
