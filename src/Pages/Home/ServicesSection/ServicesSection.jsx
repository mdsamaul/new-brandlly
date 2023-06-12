
const ServicesSection = () => {
    return (
        <div className="grid my-20 grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center lg:gap-4 mx-auto">
            <div className="card lg:w-72 rounded-md mx-3 lg:mx-0 h-44 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://www.brandlly.com/assets/ecommerce/images/icons/ic_brand.png" alt="ic_brand" className="rounded-xl w-14 h-14" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-md font-medium">Only for Brand Products</h2>
                </div>
            </div>
            <div className="card lg:w-72 lg:my-0 my-5 mx-3 lg:mx-0 h-44  rounded-md bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://www.brandlly.com/assets/ecommerce/images/icons/cash-on-delivery.png" alt="Shoes" className="rounded-xl w-14 h-14" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-md font-medium">100% Cash on Delivery</h2>
                </div>
            </div>
            <div className="card lg:w-72  rounded-md h-44 mx-3 lg:mx-0 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://www.brandlly.com/assets/ecommerce/images/icons/ic_money_back.png" alt="ic-money-back" className="rounded-xl lg:w-14 lg:h-14" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-md font-medium">15 days Moneyback Guarantee</h2>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;