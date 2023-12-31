import { BsShieldCheck } from "react-icons/bs";
import BannerParallax from "../../component/BannerParallax/BannerParallax";
import HeaderBrandLogo from "../../component/HeaderBrandLogo/HeaderBrandLogo";
import LogoRatingVerified from "../../component/LogoRatingVerified/LogoRatingVerified";
import ShopRating from "../../component/ShopRating/ShopRating";
import { useState } from "react";
import { useEffect } from "react";
import ProductTab from "../../component/ProductTab/ProductTab";

const Foring = () => {
    
    const [items, SetItems] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => SetItems(data))
            .catch(error => console.log(error))

    }, []);

    const ForingShop = items.filter(item => item.brandname === "Foring");
    
   

    return (
        <div>
                <HeaderBrandLogo shoplogo={'https://www.brandlly.com/storage/logo/6485b5f2869cc.png'}></HeaderBrandLogo>
                <div className="relative w-full h-66">
                  <BannerParallax bannerimg={'https://www.brandlly.com/storage/banner/64896ff90fd06.jpg'}></BannerParallax>
                  <LogoRatingVerified shoplogo={"https://www.brandlly.com/storage/logo/6485b5f2869cc.png"}></LogoRatingVerified>
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
                <ProductTab items={ForingShop}></ProductTab>
                </div>


            </div>    );
};

export default Foring;