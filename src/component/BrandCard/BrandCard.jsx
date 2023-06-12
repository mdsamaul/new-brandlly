import { Link } from "react-router-dom";

const BrandCard = ({ image, brandName, pathBrand, subTitle, pathShopnow }) => {
    return (
        <div className="card w-44 h-56 mx-2 lg:mx-0 my-2 lg:my-3 lg:w-64 lg:h-60 bg-base-100 pb-4 rounded-2xl shadow-xl">
            <figure className="px-10 pt-10 mb-6">
                <img src={image} className="rounded-xl" />
            </figure>
            <div className=" items-center text-center">
                <Link to={pathBrand} className="font-medium text-black mt-12  duration-700 hover:text-[#c32148]">{brandName}</Link>

                <p className="font-thin">{subTitle}</p>
                <div className="card-actions flex justify-center mt-6">
                    <Link to={pathShopnow}><button className="w-32 h-8 bg-gradient-to-r from-pink-800 to-pink-500  hover:from-pink-500 hover:to-pink-800 duration-1000 text-white rounded-full">Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;