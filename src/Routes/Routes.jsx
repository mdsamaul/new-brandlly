import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Retailers from "../Layout/Retailers.jsx";
import ScanAndRetailsers from "../Layout/ScanAndRetailsers.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import RetailersPages from "../Pages/Retailers/Retailers/RetailersPages.jsx";
import ScanAndGo from "../Pages/ScanAndGo/ScanAndGo/ScanAndGo.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
    , {
        path: "/scan&go",
        element: <ScanAndRetailsers />,
        children:[
            {
                path:"/scan&go",
                element:<ScanAndGo/>
            }
        ]
    }, {
        path: "/retailers",
        element: <Retailers />,
        children: [
            {
                path: '/retailers',
                element: <RetailersPages />
            }
        ]
    }
]);
