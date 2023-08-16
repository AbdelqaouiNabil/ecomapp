import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/login/login";
function App() {
    return (
        <>

            <Routes>
                <Route path="Login" element={<Login />} />
            </Routes>

        </>
    );
}

export default App;
