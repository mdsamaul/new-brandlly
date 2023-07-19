
const SearchTop = () => {
    const searchSection = <>
        <div className="bg-white rounded w-full hero my-2 z-50">
            <div className="join ">
                <div>
                    <div>
                        <input className="input  h-10  border border-[#C32148] join-item " placeholder="Search..." />
                    </div>
                </div>
                <select className="select  join-item  border border-[#C32148] hidden h-8 md:block">
                    <option disabled selected>Category</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
                <div>
                    {/* <button className="btn join-item h-8"></button> */}
                    <button className="border  h-full px-3 text-sm capitalize text-[#C32148] hover:text-[#fff]  border-[#C32148] join-item hover:bg-[#C32148] duration-700">Search</button>

                </div>
            </div>
            {/* <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FaSearch className="h-5 w-5 fill-slate-300" />

                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
            </label> */}
        </div>
    </>
    return (
        <div>
            <div className='lg:hidden  z-50 bg-opacity-90 bg-white w-full hero'>
                <div>
                    {searchSection}
                </div>

            </div>
        </div>
    );
};

export default SearchTop;