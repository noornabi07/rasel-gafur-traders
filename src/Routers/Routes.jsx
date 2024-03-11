import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../MainLayout/ManiLayout";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ManiLayout></ManiLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
        
    }
])

export default router;