import { useEffect } from "react";
import { useState } from "react";
import HeaderBrandLogo from "../../component/HeaderBrandLogo/HeaderBrandLogo";
import BannerParallax from "../../component/BannerParallax/BannerParallax";
import LogoRatingVerified from "../../component/LogoRatingVerified/LogoRatingVerified";
import ShopRating from "../../component/ShopRating/ShopRating";
import { BsShieldCheck } from "react-icons/bs";
import ProductTab from "../../component/ProductTab/ProductTab";

const Smart = () => {
    
    const [items, SetItems] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => SetItems(data))
            .catch(error => console.log(error))

    }, []);

    const smartShop = items.filter(item => item.brandname === "Smart");
    
   

    return (
        <div>
                <HeaderBrandLogo shoplogo={'https://www.brandlly.com/storage/logo/63e23ecc42441.png'}></HeaderBrandLogo>
                <div className="relative w-full h-66">
                  <BannerParallax bannerimg={'https://www.brandlly.com/storage/banner/640097bc07b20.jpg'}></BannerParallax>
                  <LogoRatingVerified shoplogo={"https://www.brandlly.com/storage/logo/63e23ecc42441.png"}></LogoRatingVerified>
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
                <ProductTab items={smartShop}></ProductTab>
                </div>


            </div>    );
};

export default Smart;