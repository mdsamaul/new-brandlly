import DoesWorkSlider from "./DoesWorkSlider/DoesWorkSlider.jsx";


const DoesWork = () => {

    return (
        <div className="container mx-auto mb-10">
            <div className="w-full py-10 text-center">
                <h2 className="pb-8 text-5xl font-bold">  How does it work?</h2>
                <p className="mx-auto font-medium text-slate-500 lg:w-1/3 text-md">
                    Brandlly is very simple. From our mobile app select the outlet where you want to shop. Now scan product barcodes, pay via mobile, and leave the store.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mx-10 lg:grid-cols-2">
                <div>
                    <div className="flex items-center justify-start">
                        <div>
                            <h4 className="flex items-center justify-center w-12 h-12 text-xl font-semibold text-red-800 border-2 border-red-800 rounded-full">1</h4>
                        </div>
                        <div className="mx-7">
                            <h3 className="pb-3 text-3xl font-bold text-red-800">SCAN</h3>
                            <p className="font-medium text-gray-700 text-md">
                                Shoppers simply scan the barcode of the item they want
                                to buy from their mobile app.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start my-7">
                        <div>
                            <h4 className="flex items-center justify-center w-12 h-12 text-xl font-semibold text-gray-600 border-2 border-gray-600 rounded-full">2</h4>
                        </div>
                        <div className="mx-7">
                            <h3 className="pb-3 text-3xl font-bold">  PAY</h3>
                            <p className="font-medium text-gray-700 text-md">
                                They can pay via an app with a major credit, debit,
                                visa cards, or mobile banking like bKash, Rocket, Nogod, and many more.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start">
                        <div>
                            <h4 className="flex items-center justify-center w-12 h-12 text-xl font-semibold text-gray-600 border-2 border-gray-600 rounded-full">3</h4>
                        </div>
                        <div className="mx-7">
                            <h3 className="pb-3 text-3xl font-bold">LEAVE</h3>
                            <p className="font-medium text-gray-700 text-md">
                                Now they can leave the store skipping the checkout
                                queue. No lines, No hassle to shop.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <DoesWorkSlider />
                </div>
            </div>
        </div>
    );
};

export default DoesWork;