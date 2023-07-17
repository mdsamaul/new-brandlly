import { Outlet } from "react-router-dom";
import ScanAndGoSharedNav from "../Pages/ScanAndGo/ScanAndGoShared/ScanAndGoSharedNav/ScanAndGoSharedNav.jsx";
import Footer from "../Pages/Shared/Footer/Footer.jsx";

const ScanAndRetailsers = () => {
    return (
        <div>
            <ScanAndGoSharedNav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default ScanAndRetailsers;