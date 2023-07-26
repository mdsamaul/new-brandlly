
const ProductSize = ({size}) => {
    return (
        <div className="flex items-center gap-3 cursor-pointer py-3">
            <input type="checkbox" className="checkbox checkbox-primary" />
                 <span className="font-semibold text-slate-500">{size}</span> 
            
        </div>
    );
};

export default ProductSize;