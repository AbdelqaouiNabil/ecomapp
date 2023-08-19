import { createBrowserRouter } from "react-router-dom";
import Login from './pages/login/Login'
import NotFound from './pages/NotFound'
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';
import Dashboard from './/pages/dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Dashboard/>
            },
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
        ]
    },
    
    {
        path:'*',
        element:<NotFound/>
    }
])


export default router;