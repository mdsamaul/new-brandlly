import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import MainTopNav from "../Pages/Shared/MainTopNav/MainTopNav.jsx";

const Main = () => {
    return (
        <div id="top">
            <MainTopNav></MainTopNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;