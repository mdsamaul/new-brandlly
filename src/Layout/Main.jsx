import { Outlet } from "react-router-dom";
import MainTopNav from "../Pages/Shared/MainTopNav/MainTopNav.jsx";

const Main = () => {
    return (
        <div>
            <MainTopNav></MainTopNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;