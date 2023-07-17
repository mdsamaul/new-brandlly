import { FaPlayCircle } from 'react-icons/fa';
const MolileSelf = () => {
    return (
        <div className="container grid grid-cols-1 gap-4 px-1 mb-20 lg:px-10 lg:grid-cols-5">
            <div className="w-full col-span-3 px-10 text-white">
                <h2 className="text-4xl font-bold text-white">Brandlly - mobile Self-Checkout</h2>
                <div className="py-4">
                    <h4 className="py-3 text-xl font-semibold">SCAN - <span className="font-normal text-md ">Scan product you want to buy</span> </h4>
                    <h4 className="pb-3 text-xl font-semibold">PAY - <span className="font-normal text-md ">Pay from your mobile</span> </h4>
                    <h4 className="text-xl font-semibold ">LEAVE  - <span className="font-normal text-md">Leave from store</span> </h4>

                </div>
                <div className="py-3">
                    <p>Building In-Store shopping experience</p><p className="pt-3 pb-2">
                        Brandlly is a mobile Self-Checkout solution. Shop using your own mobile. No checkout lines No hassle to shop. Scan product barcode, pay with mobile secure payment, and leave the store.
                    </p>

                </div>
                <h4 className="pt-1 font-medium">Get the mobile application</h4>
                <div>
                    <img src="https://www.brandlly.com/assets/landings/assets/images/play-store.png" className="w-48 my-5" alt="" />
                </div>
            </div>
            <div className="relative col-span-2">
                <div className="absolute top-[30%] left-[40%]">
                    <a href="https://www.youtube.com/watch?v=KHyoJDX8Al8">
                        <div className='z-10 w-16 h-16 bg-red-600 border rounded-full z animate-ping'>

                        </div>
                        <FaPlayCircle className='z-30 w-16 h-16 -mt-16 text-red-600 bg-white rounded-full ' /></a>
                </div>
                <img src="https://www.brandlly.com/assets/landings/assets/images/hero/shape.png" className="my-10" alt="" />
            </div>
        </div>
    );
};

export default MolileSelf;