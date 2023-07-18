
const AdsOnSection = () => {
    return (
        <div>
            <div className="lg:flex lg:hero lg:h-[99vh] ">
                <div className="lg:w-[50%] lg:flex items-center lg:h-full  p-10">
                    <div>
                        <h3 className="text-3xl font-bold">Ads on Top Slider</h3>
                        <h5 className="card-title font-normal text-red-700 pb-5">(Android and iOS App)</h5>
                        <p className="lg:w-[85%] font-normal">You can show your Ads on the top of the home screen where generally all sales campaigns from our partners will be shown.</p>
                    </div>
                </div>
                <div className="lg:flex h-full">
                    <div className="lg:w-full lg:h-full lg:pt-44 text-center">
                        <div>
                            <div className="w-[70%] relative m-5 flex justify-start items-center">

                                <hr className="bg-black h-1 w-full  " />
                                <div className="absolute -right-1">
                                    <p className="mask mask-triangle-4 bg-black w-5 h-5 "></p>
                                </div>
                            </div>
                            <h4 className="card-title lg:w-[60%] ">
                                Yours Ad Will Appear Here</h4>
                        </div>
                    </div>
                    <div className="lg:w-[135%]  lg:h-full lg:hero">
                        <div>
                            <img src="https://www.brandlly.com/assets/landings/assets/images/home.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:flex lg:hero  lg:h-[99vh] ">
                <div className="lg:flex  h-full">

                    <div className="lg:w-[135%]  lg:h-full lg:hero">
                        <div>
                            <img src="https://www.brandlly.com/assets/landings/assets/images/featured.png" alt="" />
                        </div>
                    </div>
                    <div className="lg:w-full lg:h-full lg:pt-44 text-center">
                        <div>
                            <div className="w-[70%] relative m-5 flex justify-start items-center">

                                <hr className="bg-black h-1 w-full  " />
                                <div className="absolute -left-1 rotate-180 ">
                                    <p className="mask mask-triangle-4 bg-black w-5 h-5 "></p>
                                </div>
                            </div>
                            <h4 className="card-title lg:w-[60%] ">
                                Yours Ad Will Appear Here</h4>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] lg:flex items-center lg:h-full  p-10">
                    <div>
                        <h3 className="text-3xl font-bold">Ads on Featured Section</h3>
                        <h5 className="card-title font-normal text-red-700 pb-5">(Android and iOS App)</h5>
                        <p className="lg:w-[95%] font-normal">
                            You can show your Ads on the featured section on the home screen where generally all featured campaigns from our partners will be shown. Here customers will see your Ads on screen, no auto-scrolling here, Ads will show till the user scrolls or goes to other pages.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdsOnSection;