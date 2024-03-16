import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../MainLayout/ManiLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ManiLayout></ManiLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
        
    }
])

export default router;