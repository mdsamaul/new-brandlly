
const AdvertiseBanner = () => {
    return (
        <div>
            <div className="hero h-[80vh] ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:pr-2 lg:w-1/2">
                        <h1 className="text-5xl font-bold">Boost Your Sales Through Ads On Brandlly</h1>
                        <p className="py-6 lg:pr-20">
                            Brandlly is a mobile Self-Checkout solution. We have a huge community of retail Brand shops and SuperMarkets across the country. Use Brandlly to reach millions of users.</p>
                    </div>
                    <div className="card flex-shrink-0 lg:w-[45%] ">


                        <div>
                            <img src="https://www.brandlly.com/assets/landings/assets/images/advertisement.svg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseBanner;