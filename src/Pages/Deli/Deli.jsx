import { BsShieldCheck } from "react-icons/bs";
import BannerParallax from "../../component/BannerParallax/BannerParallax";
import HeaderBrandLogo from "../../component/HeaderBrandLogo/HeaderBrandLogo";
import LogoRatingVerified from "../../component/LogoRatingVerified/LogoRatingVerified";
import ShopRating from "../../component/ShopRating/ShopRating";

import ProductTab from "../../component/ProductTab/ProductTab";
import { useState } from "react";
import { useEffect } from "react";

const Deli = () => {
   

    const [items, SetItems] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => SetItems(data))
            .catch(error => console.log(error))

    }, []);

    const deliShop = items.filter(item => item.brandname === "Deli");
    
   

    return (
        <div>
                <HeaderBrandLogo shoplogo={'https://www.brandlly.com/storage/logo/63e2460c3f9c6.png'}></HeaderBrandLogo>
                <div className="relative w-full h-66">
                  <BannerParallax bannerimg={'https://www.brandlly.com/storage/banner/63cd264d7c7c8.jpg'}></BannerParallax>
                  <LogoRatingVerified shoplogo={"https://www.brandlly.com/storage/logo/63e2460c3f9c6.png"}></LogoRatingVerified>
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
                <ProductTab items={deliShop}></ProductTab>
                </div>
            </div>  
              );
};

export default Deli;