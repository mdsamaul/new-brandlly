import { useEffect, useState } from "react";
import BannerParallax from "./BannerParallax/BannerParallax.jsx";

const TopManBangladesh = () => {
    const [items, SetItems] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => SetItems(data))
            .catch(error => console.log(error))

    }, []);



    return (
        <div>

            <div>
                <div className="hidden lg:block fixed -top-7  z-50 left-[30%] w-52    ">
                    <img src="https://www.brandlly.com/storage/logo/63e2456f974e0.png" className="p-3" alt="" />
                </div>


                <div className="relative w-full h-66">
                    <BannerParallax />
                    <div className="absolute -bottom-10   left-[15%] shadow-2xl rounded-md bg-white">
                        <div className="w-40 ">
                            <img src="https://www.brandlly.com/storage/logo/63e2456f974e0.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-96 pl-72">
                    samaul
                </div>



            </div>
        </div >
    );
};

export default TopManBangladesh;