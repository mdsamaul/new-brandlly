import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Retailers from "../Layout/Retailers.jsx";
import ScanAndRetailsers from "../Layout/ScanAndRetailsers.jsx";
import AdvertisePages from "../Pages/AdvertisePages/AdvertisePages.jsx";
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
            }, {
                path: '/advertise',
                element: <AdvertisePages></AdvertisePages>
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
            }, {
                path: 'samaul',
                element: <p>ami samaul</p>
            }
        ]
    }
]);
