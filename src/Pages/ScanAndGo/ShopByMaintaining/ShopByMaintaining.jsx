
const ShopByMaintaining = () => {
    return (
        <div className="mx-5 my-5 border-2 border-red-600 rounded-lg shadow-xl lg:my-10 lg:mx-20">
            <div className="gap-4 py-10 lg:grid lg:grid-cols-5 lg:px-10 "> 

                <div className="col-span-3">
                    <div className="flex items-center h-full px-4 lg:px-0">
                        <div>
                            <h2 className="pb-5 text-3xl font-bold">Shop by maintaining social distance</h2>
                            <p className="font-medium text-slate-500 ">During COVID 19, shop with your mobile maintaining social distance. By using brandlly you can shop alone, with no need for checkout lines, no conduction with other people. So use brandlly to stop spreading COVID 19.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full mx-auto lg:col-span-2">
                    <div>
                        <img src="https://www.brandlly.com/assets/landings/assets/images/service/social-distancing.svg" className="w-48 mx-auto " alt="" /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByMaintaining;