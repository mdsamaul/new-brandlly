
import { Link } from "react-router-dom";
import ReactRating from "../../ReactRating/ReactRating";
import ProductSize from "../ProductSize/ProductSize";
import { useState } from "react";


const ProductDetails = ({item}) => {

    const{brandname,color,productsize, productname, price,productdetails,quantity, url  ,rating ,shoprating }=item;

    const [count, setCount] = useState(0);
if(count < 0){
   return setCount(0)
}
    const handleMainasQuantity =()=>{
        setCount(count -1);
    }
    
    
    const handlePlusQuantity =()=>{
        setCount(count + 1);
    }
  
    return (
        <div>
            <h3 className="card-title">{productname}</h3>
            <small className="flex items-center">
 
                <ReactRating rate={rating}> </ReactRating> <samp> (Reviews({rating}))</samp>
            </small>
            <span>Brand: <Link to={`/${url}`}><span className="text-red-600 hover:underline">{brandname}</span></Link></span>
            <p className="py-3"> <span className="text-xl font-extrabold">৳</span> <span className="text-xl font-medium">{price}</span></p>
            <small>Color : <span className={`${color === "Red"}?"text-red-500":"text-black"`}>{color}</span></small>
            
            
            <label className="flex items-center gap-3 cursor-pointer py-3">
                 <input type="checkbox" className="checkbox checkbox-primary" />
                 <span className="font-semibold text-slate-500">On Display</span> 
            </label>
       
          <label>Size </label>
        
          <div className="flex items-center gap-3 cursor-pointer py-3">
            {
                productsize.map((size, index) => <ProductSize key={index} size={size}></ProductSize>)
            }
                 </div>
       
           <div className="flex items-center mb-2">
           <h3>Quantity : {}</h3>
            <h3 className="pl-20 text-slate-600">{quantity}</h3>
           </div>
         <div>
         <div className="form-control pt-3">

  <label className="input-group">
    <button onClick={handleMainasQuantity} className="btn btn-secondary text-2xl ">-</button>
    <input  type="number" value={count} className="input input-bordered text-center" />
    <button onClick={handlePlusQuantity}  className="btn btn-secondary text-2xl">+</button>
  </label>
</div>
         </div>

        </div>
    );
};

export default ProductDetails;
