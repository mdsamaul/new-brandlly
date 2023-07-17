import { FaPlayCircle } from 'react-icons/fa';
import RetailCategories from '../../ScanAndGo/RetailCategories/RetailCategories.jsx';
import HowBrandllyworks from "../HowBrandllyworks/HowBrandllyworks.jsx";
import OurPartmers from '../OurPartmers/OurPartmers.jsx';
import Msupd from '../HowBrandllyworks/Msupd/Msupd.jsx';
const RetailersPages = () => {
    return (
        <div>
            <div className="flex justify-between w-full mb-10 ">
                <div className="flex items-center w-full p-0 m-0 lg:-mt-20">
                    <div className="w-full col-span-3 text-black lg:px-20">

                        <div className="py-4">
                            <h4 className="py-3 text-xl font-medium">ONLY FOR BRAND’S -  <span className="font-normal text-md ">we sell only brand products</span> </h4>
                            <h4 className="pb-3 text-xl font-medium ">TRUSTED PLATFORM - <span className="font-normal text-md ">Transparency & customer satisfaction </span> </h4>
                            <h4 className="text-xl font-medium ">SELL NATIONWIDE  - <span className="font-normal text-md">Sell all over the country without outlet installation.</span> </h4>

                        </div>
                        <div className="py-3">
                            <p className="pt-3 pb-2 text-justify">
                                Brandlly is a premium quality multi-vendor e-commerce, mobile self-checkout and advertisement platform only for authentic retail brands. Brandlly acts as an online platform facilitating different Brand Partners to sell their Products and/or Services.
                            </p>

                        </div>

                        <div className='my-5'>
                            <button className="border-2 border-[#c32148] hover:bg-[#c32148] duration-700 hover:border-[#c32148] btn btn-outline w-52">Download Apps</button>
                            <button className="ml-4 btn bg-[#c32148] border-2 hover:border-[#c32148] duration-700 text-white hover:text-[#c32148] border-[#c32148] w-52">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className=" min-h-[100vh] lg:w-[1224px]  bg-no-repeat -mt-24 mb-10" style={{ backgroundImage: "url(https://www.brandlly.com/assets/ecommerce/images/hero/shape2.png)" }}>
                    <div className="relative flex items-center justify-start h-full">
                        <img src="https://www.brandlly.com/assets/landings/assets/images/hero/hero2.png" alt="" className="w-[550px] pl-5" />
                        <div className="absolute -ml-7 hero">
                            <a href="https://www.youtube.com/watch?v=ZlxUOfMq7jc">
                                <div className='z-10 w-16 h-16 duration-1000 bg-red-600 border rounded-full animate-ping'>

                                </div>
                                <FaPlayCircle className='z-30 w-16 h-16 -mt-16 text-red-600 bg-white rounded-full ' /></a>
                        </div>
                    </div>
                </div>

            </div >
            <div>

                <RetailCategories></RetailCategories>
                <OurPartmers />
                <HowBrandllyworks />
                <Msupd></Msupd>
            </div>
        </div>
    );
};

export default RetailersPages;