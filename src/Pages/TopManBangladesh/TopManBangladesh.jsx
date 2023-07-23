import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";



import { BsShieldCheck } from 'react-icons/bs';

import '@smastrom/react-rating/style.css';
import ShopRating from "../../component/ShopRating/ShopRating.jsx";

import HeaderBrandLogo from "../../component/HeaderBrandLogo/HeaderBrandLogo.jsx";
import LogoRatingVerified from "../../component/LogoRatingVerified/LogoRatingVerified.jsx";
import BannerParallax from "../../component/BannerParallax/BannerParallax.jsx";
import ProductTab from "../../component/ProductTab/ProductTab.jsx";

const TopManBangladesh = () => {



    const [items, SetItems] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => SetItems(data))
            .catch(error => console.log(error))

    }, []);

    const topManBangladeshShop = items.filter(item => item.brandname === "Topman Bangladesh");
    // console.log(topManBangladeshShop);



    return (
      
            <div>
                <HeaderBrandLogo shoplogo={'https://www.brandlly.com/storage/logo/63e2456f974e0.png'}></HeaderBrandLogo>
                <div className="relative w-full h-66">
                  <BannerParallax bannerimg={'https://www.brandlly.com/storage/banner/62b9890cc2f99.jpg'}></BannerParallax>
                  <LogoRatingVerified shoplogo={"https://www.brandlly.com/storage/logo/63e2456f974e0.png"}></LogoRatingVerified>
                </div>
                <div className="w-full lg:pl-[28%] mb-5">
                    <div>
                        <ShopRating rating={"4.5"}></ShopRating>
                    </div>
                    <div className="flex items-center gap-1 text-green-700">
                        <span><BsShieldCheck className="text-xs" /></span>
                        <small className="text-xs">  Verified</small>
                    </div>

                </div>

                <div className="my-3">
                    
                    <ProductTab items={topManBangladeshShop}></ProductTab>
                </div>


            </div>


    );
};

export default TopManBangladesh;