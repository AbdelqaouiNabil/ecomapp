import {  Routes, Route, Link } from "react-router-dom";

import Login from "./Login";
function App() {

  return (
    <>
      <div className='max-w-xl6 mx-auto'>
       <h1> Hello </h1>
       <h2> Back End Developer </h2>
       <Link to="/">Home</Link>
       <Link to="/login">Login</Link>
       <Link to="/register">Register</Link>
       <div>
        <Routes>
        <Route path="Login" element={<Login />} />
        </Routes>
       </div>
      </div>
     
    </>
  )
}

export default App
