import { useEffect } from "react";
import { useState } from "react";
import ShopRating from "../../component/ShopRating/ShopRating";
import { BsShieldCheck } from "react-icons/bs";
import FreedomBannerParallax from "./FreedomBannerParallax/FreedomBannerParallax";
import FreedomBangladeshTab from "./FreedomBangladeshTab/FreedomBangladeshTab";

const FreedomBangladesh = () => {
    

    const [items, SetItems] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => SetItems(data))
            .catch(error => console.log(error))

    }, []);

    const freedomBangladeshShop = items.filter(item => item.brandname === "Freedom Bangladesh");
    
   

    return (
        <div>
            <div>
                <div className="hidden lg:block fixed -top-7  z-50 left-[30%] w-52    ">
                    <img src="https://www.brandlly.com/storage/logo/63e2456f974e0.png" className="p-3" alt="" />
                </div>
                <div className="relative w-full h-66">
                   <FreedomBannerParallax/>
                    <div className="absolute -bottom-10   left-[15%] shadow-2xl rounded-md bg-white">
                        <div className="w-40">
                            <img src="https://www.brandlly.com/storage/logo/63e2456f974e0.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:pl-[28%] mb-5">
                    <div>
                        {/* <Rating
                            style={{ maxWidth: 100 }}
                            value={2}
                            readOnly
                            className=" my-2"
                        /> */}
                        <ShopRating rating={"4.5"}></ShopRating>
                    </div>
                    <div className="flex items-center gap-1 text-green-700">
                        <span><BsShieldCheck className="text-xs" /></span>
                        <small className="text-xs">  Verified</small>
                    </div>

                </div>

                <div className="my-3">
                    <FreedomBangladeshTab items={freedomBangladeshShop}></FreedomBangladeshTab>
                </div>


            </div>


        </div >
    );
};

export default FreedomBangladesh;