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
            <div className="sticky top-0 z-50 shadow-2xl">
                <SearchTop />
            </div>
            <div className="z-40">
                <div className="sticky z-50 top-0">
                    <MainTopNav></MainTopNav>
                </div>
                <div className="z-40">
                    <Outlet></Outlet>
            <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Main;