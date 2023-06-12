import { Link } from "react-router-dom";

const LetsTryBrandlly = () => {
    return (
        <div className="hero bg-[#d1284f] lg:min-h-screen ">
            <div className="hero-content text-center">
                <div className="max-w-xl  text-white">
                    <h1 className="text-5xl font-bold">Let’s Try Brandlly</h1>
                    <Link><img src="https://www.brandlly.com/assets/ecommerce/images/play-store.png" className="w-40 h-12 mx-auto lg:mt-10" alt="" /></Link>
                    <p className="py-6 lg:px-10 text-md font-semibold">Need more information? Call our customer support 09611656025 or Chat by clicking the rightmost message icon on the bottom side of the screen.</p>
                </div>
            </div>
        </div>
    );
};

export default LetsTryBrandlly;