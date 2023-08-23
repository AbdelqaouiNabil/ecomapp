import React, { useEffect, useState } from "react";
//import toast, { Toaster } from 'react-hot-toast';
import { Link,NavLink } from "react-router-dom";
import "./nav.scss";
import logo from '../../../assets/logo.svg';

function Nav() {
    const [theme,setTheme] = useState(+localStorage.getItem("dark_mode"));

    const darkMode = (el) =>{


        let  body = document.querySelector('body');

        localStorage.getItem("dark_mode") == "1" ? localStorage.setItem("dark_mode", 0) : localStorage.setItem("dark_mode", 1)

        body.classList.toggle('darkmode');
        el.target.classList.toggle('active_btn_dark_mode')


    }

    useEffect(()=>{

        theme ? document.querySelector('body').classList.add('darkmode') : null

        return () =>{



            console.log(theme)

        }

    },[])

    const rr = () =>{

        console.log('hi khdama mzian')

    }
    return (
        <>
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" width="60" />
            </div>
            <div className="list_d">
                <ul>
                    <li>
                        <NavLink to="/">
                            <i className="material-symbols-outlined">dashboard</i>
                            dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/commerce">
                            <i className="material-symbols-outlined">shopping_basket</i>e -
                            commerce
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">
                            <i className="material-symbols-outlined">calendar_month</i>
                            calendar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">
                            <i className="material-symbols-outlined">receipt_long</i>
                            orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">
                            <i className="material-symbols-outlined">checklist_rtl</i>
                            to do
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">
                            <i className="material-symbols-outlined">sms</i>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">
                            <i className="material-symbols-outlined">sms</i>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="footer">
                <span><button onClick={(e)=>{darkMode(e)}}></button> dark mode</span>
            </div>
        </nav>
        </>
    );
}

export default Nav;
