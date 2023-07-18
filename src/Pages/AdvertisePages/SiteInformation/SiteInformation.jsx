
const SiteInformation = () => {
    return (
        <div className="w-full h-40 hero">
            <div className="stats shadow lg:w-[80%] lg:h-32 bg-gradient-to-r from-[#c32148] to-[#ea708b] " >

                <div className="stat hero">


                    <div className="text-white text-center">
                        <div className="font-medium text-5xl ">186</div>
                        <div>Users</div>
                    </div>
                </div>
                <div className="stat hero">


                    <div className="text-white text-center">
                        <div className="font-medium text-5xl ">11</div>
                        <div>Retail Brands</div>
                    </div>
                </div>

                <div className="stat hero">


                    <div className="text-white text-center">
                        <div className="font-medium text-5xl ">0</div>
                        <div>Daily Sales</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SiteInformation;