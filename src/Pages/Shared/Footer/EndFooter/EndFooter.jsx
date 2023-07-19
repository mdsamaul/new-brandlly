import { IoIosArrowUp } from 'react-icons/io';

const EndFooter = () => {
    return (
        <div>

            <div className="hero h-[10vh] -mt-9">
                <span className="relative cursor-pointer hero flex h-12 w-12">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c7294f] opacity-75"></span>
                    <button id='top'><span className="justify-center items-center text-white text-2xl relative inline-flex rounded-full h-12 w-12 bg-[#c7294f] hover:bg-transparent hover:border-[#c7294f]  hover:text-[#c7294f] only:hover:border-2"><IoIosArrowUp /></span></button>
                </span>
            </div>
            <div>
                <div className="lg:flex items-center h-[10vh] lg:justify-around ">
                    <div className='lg:w-[33%] hero'>
                        <img src="https://www.brandlly.com/assets/landings/assets/images/Brandlly-logo.png" className='lg:w-[55%] ' alt="" />
                    </div>
                    <div className="grid grid-flow-col gap-4 text-center mb-3">
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Trust & security</a>

                    </div>

                    <div className='lg:w-[33%] hero'>
                        <p>© 2023 Brandlly</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndFooter;