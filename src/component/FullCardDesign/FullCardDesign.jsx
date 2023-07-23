import CardProductImages from "./CardProductImages/CardProductImages";
import CardRating from "./CardRating/CardRating";
import { Link } from "react-router-dom";

const FullCardDesign = ({item}) => {
// console.log(item.productname)
// const productImages = item.totalImages;
// console.log(productImages)

    return (
        <div  className="mb-10">
            <div className=" sticky">
            <CardProductImages item={item}></CardProductImages>
            <div>
                <div className="px-3 text-white absolute z-50 bottom-4 ml-2 rounded bg-white bg-opacity-40">
               <CardRating item={item}></CardRating> 
                </div>
            </div>
            </div>
            <div className="border border-t-0 border-red-500 rounded-b-md py-2">
              <h3 className="px-2 text-base font-semibold">{item.productname}</h3>
              <div className="flex justify-around items-center">
              <div >
              {/* ৳ */}
              <h3 className="px-2 text-md font-semibold"><span className="font-extrabold ">&#2547;</span> {item.price}</h3>

              </div>
              <div>
              <Link to='/'><button className="rounded-md hover: btn-outline bg-white hover:text-[#ffffff] border border-red-600 duration-500 text-md hover:bg-[#c32148] text-[#c32148]" style={{ height: '36px', width: '96px' }}>Buy Now</button></Link>
              </div>
              </div>
            </div>
        </div>
    );
};

export default FullCardDesign;