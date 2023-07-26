import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImages from "./ProductImages/ProductImages";


const ProductInfo = ({item}) => {



    
   
    return (
        <div className="w-full lg:flex">           
      <div className="w-[40%]">
        <ProductImages item={item}></ProductImages>
      </div>
      <div className="p-5">
       <ProductDetails item={item}></ProductDetails>
      </div>
        </div>
    );
};

export default ProductInfo;

