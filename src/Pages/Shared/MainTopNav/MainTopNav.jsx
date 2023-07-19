import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { BiUser } from 'react-icons/bi';
import { BsChat } from 'react-icons/bs';
import { FcHome } from 'react-icons/fc';
import { FiShoppingBag } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { Link } from "react-router-dom";
import SingIn from '../SingIn/SingIn.jsx';

const MainTopNav = () => {
    const [isOpen, setOpen] = useState(false)

    const mobileBotonNav = <>
        <div>
            <ul className=' flex justify-between items-center h-16'>
                <li className='hero'>
                    <Link to="/"><FcHome className='mx-auto text-2xl' /> Home</Link>
                </li>
                <li className='hero'>
                    <Link to="/"><FiShoppingBag className='mx-auto text-2xl' />Order</Link>
                </li>
                <li className='bg-[#c7294f] p-7 flex items-center  w-5 h-10 rounded-full justify-center mb-16'>
                    <Link to="/"><BsChat className=' text-xl text-[#fff] ' /></Link>
                </li>
                <li className='hero'>
                    <Link to="/"><LuShoppingCart className='mx-auto text-2xl' />Shop</Link>
                </li>
                <li className='hero'>
                    <Link to="/"><BiUser className='mx-auto text-2xl' /> Account</Link>
                </li>


            </ul>
        </div>

    </>

    // const searchSection = <>
    //     <div className=''>
    //         <div className="join">
    //             <div>
    //                 <div>
    //                     <input className="input input-bordered join-item" placeholder="Search..." />
    //                 </div>
    //             </div>
    //             <select className="select select-bordered join-item hidden md:block">
    //                 <option disabled selected>Category</option>
    //                 <option>Sci-fi</option>
    //                 <option>Drama</option>
    //                 <option>Action</option>
    //             </select>
    //             <div>
    //                 <button className="btn join-item">Search</button>
    //             </div>
    //         </div>
    //         {/* <label className="relative block">
    //             <span className="sr-only">Search</span>
    //             <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    //                 <FaSearch className="h-5 w-5 fill-slate-300" />

    //             </span>
    //             <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
    //         </label> */}
    //     </div>
    // </>

    const navItems = <>
        <div >
            <div className={`absolute z-0  py-5  md:static duration-1000 w-full md:flex md:justify-end left-0  ${isOpen ? '-mt-20 pt-28' : ' -top-40 '}`}>

                <li><Link to='/' className="hover:text-[#c32148] duration-500 text-md text-black px-3" style={{ fontWeight: '400' }}>Shop</Link></li>
                <li><Link to='/scan&go' className="hover:text-[#c32148] duration-500 text-md text-black px-3" style={{ fontWeight: '400' }}>Scan & Go</Link></li>
                <li><Link to='/retailers' className="hover:text-[#c32148] duration-500 text-md text-black px-3" style={{ fontWeight: '400' }}>Retailers</Link></li>
                <li><Link to='/advertise' className="hover:text-[#c32148] duration-500 text-md text-black px-3" style={{ fontWeight: '400' }}>Advertise</Link></li>

            </div>
        </div>
        <div className="flex items-center z-30  gap-4 ml-8">

            <li>
                <button className="btn btn-link  text-[#c32148] font-semibold underline hover:text-slate-950 duration-500" onClick={() => window.my_modal_4.showModal()}>Sing_in</button></li>
            <li><Link to='/getstart'><button className="rounded-md hover: btn-outline hover:bg-white hover:text-[#c32148] hover:border hover:border-red-600 duration-500 text-md bg-[#c32148] text-white" style={{ height: '36px', width: '96px' }}>Get Started</button></Link></li>
        </div>
        <div className='lg:hidden'>
            <Hamburger Sling toggled={isOpen} toggle={setOpen} />
        </div>

    </>
    // console.log(isOpen);

    return (
        <div>
            <div className="lg:flex shadow lg:justify-between lg:px-3 lg:items-center w-full lg:h-16  bg-white bg-opacity-90">
                <div className='z-30 hidden pl-10  bg-opacity-90 lg:block '>
                    <img src="https://i.ibb.co/7QWnQz6/Brandlly-Transparent.png" className=" lg:w-64 lg:h-16 p-2 " alt="" /></div>
                <div className=' pr-10'>
                    <div className='hidden lg:block'>
                        <ul className=" flex items-center w-full lg:w-auto">
                    {navItems}
                </ul>
                    </div>

                    {/* <div className='lg:hidden  z-30  bg-white w-full hero'>
                       <div>
                       {searchSection}
                       </div>

                    </div> */}
            </div>

            </div>
            {/* You can open the modal using ID.showModal() method */}
            <div>
                {/* <dialog id="my_modal_4" className="modal">
                    <form method="dialog" className="modal-box w-11/12 max-w-5xl">

                        <div className="modal-action">
                            <SingIn/>
                        </div>
                    </form>
                </dialog> */}
                <dialog id="my_modal_4" className="modal">
                    <form method="dialog" className="lg:w-[70%] lg:h-[72%] modal-box w-11/12 max-w-5xl">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div>
                            <SingIn />
                        </div>
                    </form>
                </dialog>
            </div>
            <div className='w-full lg:hidden h-16 border z-30 bg-white fixed bottom-0 shadow-2xl'>
                <div>
                    {mobileBotonNav}
                </div>
            </div>
        </div>
    );
};

export default MainTopNav;