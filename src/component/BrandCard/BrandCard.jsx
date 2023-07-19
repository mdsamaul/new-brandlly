import { Link } from "react-router-dom";

const BrandCard = ({ image, brandName, pathBrand, subTitle, pathShopnow }) => {
    return (
        <div className="card  mx-2 lg:mx-0 my-2 lg:my-3 lg:w-64 lg:h-60 bg-base-100 pb-4 rounded-2xl shadow-xl">
            <figure className="">
                <Link to={pathBrand} className="lg:m-10 sm:mx-3 "><img src={image} className="rounded-xl px-10 " /></Link>
            </figure>
            <div className=" items-center text-center">
                <Link to={pathBrand} className="font-medium text-black lg:mt-12 text-base  duration-700 hover:text-[#c32148]">{brandName}</Link>

                <p className="font-light text-sm text-slate-400">{subTitle}</p>
                <div className="card-actions flex justify-center lg:mt-6 mt-3">
                    <Link to={pathShopnow}><button className="w-32 h-8 bg-gradient-to-r from-pink-800 to-pink-500  hover:from-pink-500 hover:to-pink-800 duration-1000 text-white rounded-full">Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;