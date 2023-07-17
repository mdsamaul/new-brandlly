
const ShopByMaintaining = () => {
    return (
        <div className=" border-2 rounded-lg border-red-600 shadow-xl my-10 mx-20">
            <div className="grid px-10 py-10 grid-cols-5 gap-4">

                <div className="col-span-3">
                    <div className="flex items-center h-full">
                        <div>
                            <h2 className="text-3xl font-bold pb-5">Shop by maintaining social distance</h2>
                            <p className="text-slate-500 font-medium ">During COVID 19, shop with your mobile maintaining social distance. By using brandlly you can shop alone, with no need for checkout lines, no conduction with other people. So use brandlly to stop spreading COVID 19.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <img src="https://www.brandlly.com/assets/landings/assets/images/service/social-distancing.svg" className="w-48  mx-auto" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShopByMaintaining;