import OurPartmers from "../Retailers/OurPartmers/OurPartmers.jsx";
import AdvertiseBanner from "./AdvertiseBanner/AdvertiseBanner.jsx";
import AdvertisePlacementAndPricing from "./AdvertisePlacementAndPricing/AdvertisePlacementAndPricing.jsx";
import SiteInformation from "./SiteInformation/SiteInformation.jsx";
import WantToShowAds from "./WantToShowAds/WantToShowAds.jsx";
import WhoAdsOnBrandlly from "./WhoAdsOnBrandlly/WhoAdsOnBrandlly.jsx";

const AdvertisePages = () => {
    return (
        <div>
            <AdvertiseBanner />
            <SiteInformation />
            <OurPartmers />
            <WhoAdsOnBrandlly />
            <AdvertisePlacementAndPricing />
            <WantToShowAds />
        </div>
    );
};

export default AdvertisePages;