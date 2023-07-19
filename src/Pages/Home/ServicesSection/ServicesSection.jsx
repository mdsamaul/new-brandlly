
const ServicesSection = () => {
    return (
        <div>
            <div className="grid gap-1 mx-2 lg:gap-4 lg:mx-4 mt-4 lg:mt-10 mb-5 grid-cols-3">
                <div className="border rounded w-full hero">
                    <div className="text-center">
                        <img src="https://www.brandlly.com/assets/ecommerce/images/icons/ic_brand.png" className="w-10  lg:w-14 lg:h-14 m-5 pb-1 mx-auto mb-1" alt="" />
                        <h3 className="text-xs mb-3 font-semibold lg:text-base text-center">Only for Brand Products</h3>
                    </div>
                </div>
                <div className="border rounded w-full hero">
                    <div>
                        <img src="https://www.brandlly.com/assets/ecommerce/images/icons/cash-on-delivery.png" className="w-10  lg:w-14 lg:h-14 m-5 pb-1 mx-auto mb-1" alt="" />
                        <h3 className="text-xs mb-3 font-semibold lg:text-base text-center">100% Cash on Delivery</h3>
                    </div>
                </div>
                <div className="border rounded w-full hero">
                    <div>
                        <img src="https://www.brandlly.com/assets/ecommerce/images/icons/ic_money_back.png" className="w-10  lg:w-14 lg:h-14 m-5 pb-1 mx-auto mb-1" alt="" />
                        <h3 className="text-xs mb-3 font-semibold lg:text-base text-center">15 days Moneyback Guarantee</h3>
                    </div>
                </div>



            </div>

            {/* <div className="grid grid-cols-3 mb-10">
                <div className="card lg:w-80 rounded-md mx-3 lg:mx-0 h-44 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://www.brandlly.com/assets/ecommerce/images/icons/ic_brand.png" alt="ic_brand" className="rounded-xl w-14 h-14" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-md font-medium">Only for Brand Products</h2>
                </div>
            </div>
                <div className="card lg:w-80 lg:my-0 my-5 mx-3 lg:mx-0 h-44  rounded-md bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://www.brandlly.com/assets/ecommerce/images/icons/cash-on-delivery.png" alt="Shoes" className="rounded-xl w-14 h-14" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-md font-medium">100% Cash on Delivery</h2>
                </div>
            </div>
                <div className="card lg:w-80  rounded-md h-44 mx-3 lg:mx-0 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://www.brandlly.com/assets/ecommerce/images/icons/ic_money_back.png" alt="ic-money-back" className="rounded-xl lg:w-14 lg:h-14" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-md font-medium">15 days Moneyback Guarantee</h2>
                </div>
            </div>
        </div> */}
        </div>
    );
};

export default ServicesSection;