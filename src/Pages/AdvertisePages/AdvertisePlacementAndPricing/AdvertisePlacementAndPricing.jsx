import SameHeading from "../../../component/SameHeading/SameHeading.jsx";
import AdsOnSection from "./AdsOnSection/AdsOnSection.jsx";

const AdvertisePlacementAndPricing = () => {
    return (
        <div>
            <div>
            <SameHeading title={"Advertise Placement and Pricing"} subTitle={"Brandlly will show your Ads on some specific portions of web and mobile applications. Here are the places to show Ads and pricing of these places."}></SameHeading>
            </div>
            <div className="container mx-auto lg:px-8 lg:mb-10">
                <AdsOnSection />
            </div>
        </div>
    );
};

export default AdvertisePlacementAndPricing;