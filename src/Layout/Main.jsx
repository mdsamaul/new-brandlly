import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import MainTopNav from "../Pages/Shared/MainTopNav/MainTopNav.jsx";
import SearchTop from "../Pages/Shared/SearchTop/SearchTop.jsx";

const Main = () => {
    return (
        <div>
            <div className="hero my-4 lg:hidden">
                <img src="https://www.brandlly.com/assets/landings/assets/images/Brandlly-logo.png" className="w-28  lg:w-64 " alt="" />
            </div>
            <div className="sticky top-0 z-50">
                <SearchTop />
            </div>
            <div className="z-0">
            <MainTopNav></MainTopNav>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;