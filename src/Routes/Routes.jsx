import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Retailers from "../Layout/Retailers.jsx";
import ScanAndRetailsers from "../Layout/ScanAndRetailsers.jsx";
import AdvertisePages from "../Pages/AdvertisePages/AdvertisePages.jsx";
import Deli from "../Pages/Deli/Deli.jsx";
import Foring from "../Pages/Foring/Foring.jsx";
import FreedomBangladesh from "../Pages/FreedomBangladesh/FreedomBangladesh.jsx";
import Havells from "../Pages/Havells/Havells.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import Nipro from "../Pages/Nipro/Nipro.jsx";
import Philips from "../Pages/Philips/Philips.jsx";
import RetailersPages from "../Pages/Retailers/Retailers/RetailersPages.jsx";
import ScanAndGo from "../Pages/ScanAndGo/ScanAndGo/ScanAndGo.jsx";
import Sharp from "../Pages/Sharp/Sharp.jsx";
import Smart from "../Pages/Smart/Smart.jsx";
import Sony from "../Pages/Sony/Sony.jsx";
import StyleDoor from "../Pages/StyleDoor/StyleDoor.jsx";
import TopManBangladesh from "../Pages/TopManBangladesh/TopManBangladesh.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/advertise",
        element: <AdvertisePages></AdvertisePages>,
      },
      {
        path: "/deli",
        element: <Deli />,
      },
      {
        path: "/topman-bangladesh",
        element: <TopManBangladesh />,
      },
      {
        path: "/philips",
        element: <Philips />,
      },
      {
        path: "/freedom-bangladesh",
        element: <FreedomBangladesh />,
      },
      {
        path: "/styledoor",
        element: <StyleDoor />,
      },
      {
        path: "/foring",
        element: <Foring />,
      },
      {
        path: "/sony",
        element: <Sony />,
      },
      {
        path: "/smart",
        element: <Smart />,
      },
      {
        path: "/sharp",
        element: <Sharp />,
      },
      {
        path: "/havells",
        element: <Havells />,
      },
      {
        path: "/nipro",
        element: <Nipro />,
      },
    ],
  },
  {
    path: "/scan&go",
    element: <ScanAndRetailsers />,
    children: [
      {
        path: "/scan&go",
        element: <ScanAndGo />,
      },
    ],
  },
  {
    path: "/retailers",
    element: <Retailers />,
    children: [
      {
        path: "/retailers",
        element: <RetailersPages />,
      },
    ],
  },
]);
