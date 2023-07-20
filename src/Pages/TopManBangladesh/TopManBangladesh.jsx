import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import BannerParallax from "./BannerParallax/BannerParallax.jsx";


import { BsShieldCheck } from 'react-icons/bs';

import '@smastrom/react-rating/style.css';
import TopManBangladeshSlider from "./TopManBangladeshSlider/TopManBangladeshSlider.jsx";
import TopManBangladeshTab from "./TopManBangladeshTab/TopManBangladeshTab.jsx";

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

            <div>
                <div className="hidden lg:block fixed -top-7  z-50 left-[30%] w-52    ">
                    <img src="https://www.brandlly.com/storage/logo/63e2456f974e0.png" className="p-3" alt="" />
                </div>


                <div className="relative w-full h-66">
                    <BannerParallax />
                    <div className="absolute -bottom-10   left-[15%] shadow-2xl rounded-md bg-white">
                        <div className="w-40">
                            <img src="https://www.brandlly.com/storage/logo/63e2456f974e0.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:pl-[28%] mb-5">
                    samaul 
                    <div>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={2}
                            readOnly
                            className=" my-2"
                        />
                    </div>
                    <div className="flex items-center gap-1 text-green-700">
                        <span><BsShieldCheck className="text-xs" /></span>
                        <small className="text-xs">  Verified</small>
                    </div>

                </div>

                <div className="my-3">
                    <TopManBangladeshTab items={topManBangladeshShop}></TopManBangladeshTab>
                </div>


            </div>

            <div className="border hero w-96  h-96">
                <TopManBangladeshSlider />

            </div>
        </div >
    );
};

export default TopManBangladesh;