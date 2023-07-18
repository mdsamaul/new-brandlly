import { IoMdCall } from 'react-icons/io';
const SingIn = () => {
    return (
        <div>
            <div className="hero lg:h-[50vh]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://www.brandlly.com/assets/landings/assets/images/sign_in.svg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <div className="card-body ">
                            <div className="form-control">
                                <img src="https://www.brandlly.com/assets/landings/assets/images/logo-black.png" alt="" />
                                <div className='pb-3 pt-2'>
                                    <h3 className="text-2xl font-medium pt-2 ">Welcome</h3>
                                    <span className="text-2xl font-light">Customer Sign In</span>
                                </div>
                            </div>
                            <div className="form-control mt-2">

                                <label className="relative block">
                                    <span className="sr-only">Search</span>
                                    <span className="absolute inset-y-0 right-3 flex items-center pl-2">
                                        <IoMdCall className='text-slate-700' />
                                    </span>
                                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-stone-500 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-red-800 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary bg-[#C7294F] hover:bg-transparent border-2 hover:text-[#C7294F] border-[#C7294F] hover:border-[#C7294F] ">Login</button>

                                <button className='btn btn-link mt-3 text-[#C7294F]'>Partner Sing In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;