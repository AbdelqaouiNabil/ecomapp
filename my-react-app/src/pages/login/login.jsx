import React, { useState } from "react";
import { Link , Navigate, useNavigate} from "react-router-dom";
import { Alert } from "@mui/material";
import axios from "axios";
import "./css/login.scss";
import logo from '../../../assets/logo.svg';
import affect from '../../../assets/test.svg';
import { useStateContext } from "../../contexts/ContextProvider";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErrors, setemailErrors] = useState("");
    const [passwordErrors, setpasswordErrors] = useState("");
    const [messageErrors, setmessageErrors] = useState("");
    const {setUser, setToken} = useStateContext("");
   

    const handleLogin = async(event)=>{
        event.preventDefault();
        try{
            
            await axios.post("http://127.0.0.1:8000/api/login",{email,password})
            .then(({data}) => {
                setUser(data.user);
                setToken(data.token);
                console.log(data.token);
                setemailErrors('');
                setpasswordErrors('');
                
                  
             })
             .catch(err =>{
                const response = err.response;
                if(response && response.status == 422){
                    if(response.data.errors){
                        setemailErrors(response.data.errors.email[0]);
                    setpasswordErrors(response.data.errors.password[0]);
                    }else{
                        setmessageErrors( <Alert severity="error">{response.data.message}</Alert>
                        );
                        console.log(response)
                    }
                    
                    
                }

             })
             
        }catch(e){
            console.log(e);

        }
    }

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
                        {messageErrors}

                            <form onSubmit={handleLogin}>
                                <div className="div_form">
                                    <label>Email address</label>
                                    <input
                                       onChange={(e)=>setEmail(e.target.value)}
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="enter email"
                                    ></input>
                                    {emailErrors}
                                    
                                </div>
                                <div className="div_form">
                                    <label>Password</label>
                                    <input
                                       onChange={(e)=>setPassword(e.target.value)}
                                        type="password"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="password"
                                    ></input>
                                    {passwordErrors}
                                </div>
                                <div className="checkbox_div">
                                   <div className="checkbox">

                                   </div>
                                   <span>Lorem, ipsum.</span>
                                </div>
                                

                                <button type="submit">login</button>
                            </form>
                        </div>
                    </div>
                </div>


            </main>
        </>
    );
}

export default Login;
