import { Link } from "react-router-dom";

const BrandCard = ({ image, brandName, pathBrand, subTitle, pathShopnow }) => {
    return (
        <div className="card w-44 h-56 mx-2 lg:mx-0 my-2 lg:my-3 lg:w-64 lg:h-60 bg-base-100 pb-4 rounded-2xl shadow-xl">
            <figure className="">
                <Link to={pathBrand} className="m-10"><img src={image} className="rounded-xl w-60 h-24 " /></Link>
            </figure>
            <div className=" items-center text-center">
                <Link to={pathBrand} className="font-medium text-black mt-12  duration-700 hover:text-[#c32148]">{brandName}</Link>

                <p className="font-light text-sm text-slate-400">{subTitle}</p>
                <div className="card-actions flex justify-center mt-6">
                    <Link to={pathShopnow}><button className="w-32 h-8 bg-gradient-to-r from-pink-800 to-pink-500  hover:from-pink-500 hover:to-pink-800 duration-1000 text-white rounded-full">Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;