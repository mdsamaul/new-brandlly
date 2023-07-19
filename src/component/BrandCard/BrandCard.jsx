import React from 'react';

const BrandCard = ({ fashionProduct }) => {
    // console.log(fashionProduct.brandlogo);
    // console.log(fashionProduct.category);
    // console.log(fashionProduct.brandname);
    const { brandlogo, category, brandname } = fashionProduct;
    console.log(brandlogo, category, brandname);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-1 border">
                    <img src={brandlogo} className="rounded-xl" />
                </figure>
                <div className="card-body px-1 lg:px-2 pt-1 pb-2 items-center text-center">
                    <h2 className="text-base lg:card-title font-semibold p-0 m-0">{brandname}</h2>
                    <samp className='text-stone-500  m-0'>{category}</samp>
                    <div className="card-actions">
                        <button className="btn btn-sm bg-gradient-to-r from-[#c32148] to-[#ea708b] rounded-full mb-2"><span className='animate-pulse text-white capitalize text-sm font-extralight px-3'>Shop Now</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;