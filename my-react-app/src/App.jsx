import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Commerce from "./pages/commerce/Commerce";
import Nav from "./pages/nav/Nav";
import NavTwo from "./pages/nav/NavTwo";
import { useEffect, useState } from "react";
function App() {
    const [login, setLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("login")) {
            setLogin(true);
        }
    }, []);

    if (!login) {
        return <Login></Login>;
    }
    return (
        <>
            <Nav />
            <main className="dashboard">
                <NavTwo />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="commerce" element={<Commerce/>} />
                    <Route path="home" element={<Dashboard />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
