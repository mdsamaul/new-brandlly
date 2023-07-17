import DoesWork from "../DoesWork/DoesWork.jsx";
import OurPartners from "../OurPartners/OurPartners.jsx";
import RetailCategories from "../RetailCategories/RetailCategories.jsx";
import ShopByMaintaining from "../ShopByMaintaining/ShopByMaintaining.jsx";
import MolileSelf from "./MolileSelf/MolileSelf.jsx";

const ScanAndGo = () => {
    return (
        <div>
            <div className="hero min-h-[130vh] w-full -mt-24 " style={{ backgroundImage: "url(https://www.brandlly.com/assets/ecommerce/images/hero/hero3.png)" }}>
                <div >
                    <MolileSelf />

                </div>

            </div>
            <div>
                <ShopByMaintaining />
                <RetailCategories />
                <OurPartners />
                <DoesWork />
            </div>
        </div>
    );
};

export default ScanAndGo;