import { useEffect, useState } from "react";
import SameHeading from "../../../component/SameHeading/SameHeading.jsx";
import WhoAdsOnBrandllyCard from "./WhoAdsOnBrandllyCard/WhoAdsOnBrandllyCard.jsx";

const WhoAdsOnBrandlly = () => {
    const [whoAds, SetWhoAds] = useState([]);
    useEffect(() => {
        fetch('whoAdsOnBrandlly.json')
            .then(res => res.json())
            .then(data => SetWhoAds(data))
            .catch(error => console.log(error))

    }, [])
    console.log(whoAds);
    return (
        <div className="container lg:px-20">
            <SameHeading title={"Why Ads on Brandlly?"} subTitle={"Brandlly is a huge community of retail Brand shops and SuperMarkets across the country. Boost your sales, promote your brand with Brandlly."}></SameHeading>
            <div className="grid grid-cols-1 gap-4 mx-5 card md:grid-cols-3 lg:grid-cols-4 lg:mx-0">

                {
                    whoAds.map(wabitem => <WhoAdsOnBrandllyCard key={wabitem.id} wabitem={wabitem}></WhoAdsOnBrandllyCard>)
                }


            </div>
        </div>
    );
};

export default WhoAdsOnBrandlly;