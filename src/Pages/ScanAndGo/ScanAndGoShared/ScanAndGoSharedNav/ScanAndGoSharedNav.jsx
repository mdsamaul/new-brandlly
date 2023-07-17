import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { Link } from "react-router-dom";

const ScanAndGoSharedNav = () => {
    const [isOpen, setOpen] = useState(false)


    const navItems = <>
        <div >
            <div className={`absolute sm:z-0 py-5  md:static duration-700 w-full md:flex md:justify-end left-0 bg-[#d84b6c] lg:bg-transparent  ${isOpen ? 'top-20' : ' -top-96  '}`}>

                <li><Link to='/' className="px-3 text-white duration-500 hover:text-black text-md" style={{ fontWeight: '400' }}>Shop</Link></li>
                <li><Link to='/scan&go' className="hover:text-[#1e070d] duration-500 text-md text-white px-3" style={{ fontWeight: '400' }}>Scan & Go</Link></li>
                <li><Link to='/retailers' className="px-3 text-white duration-500 hover:text-black text-md" style={{ fontWeight: '400' }}>Retailers</Link></li>
                <li><Link to='/advertise' className="px-3 text-white duration-500 hover:text-black text-md" style={{ fontWeight: '400' }}>Advertise</Link></li>

            </div>
        </div>
        <div className="z-50 flex items-center gap-4 ml-8">
            <li><Link to='/singin' className="text-[#fff] font-semibold underline hover:text-slate-950 duration-500">Sing in</Link></li>
            <li><Link to='/advertise'><button className="rounded-md hover: btn-outline hover:bg-transparent hover:text-[#fff] hover:border hover:border-white duration-500 text-md bg-[#fff] text-black" style={{ height: '36px', width: '96px' }}>Get Started</button></Link></li>
        </div>
        <div className='lg:hidden'>
            <Hamburger Sling toggled={isOpen} toggle={setOpen} />
        </div>

    </>
    console.log(isOpen);

    return (

        <div className="flex  bg-[#d84b6c] lg:bg-transparent items-center justify-between w-full h-20 max-w-6xl px-3 py-12 mx-auto ">
            <div className='z-50  bg-[#d84b6c] lg:bg-transparent'><img src="https://i.ibb.co/7QWnQz6/Brandlly-Transparent.png" className="h-10 bg-transparent w-28 lg:w-56 lg:h-12" alt="" /></div>
            <div className='z-20'>
                <ul className="flex items-center w-full lg:w-auto">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};


export default ScanAndGoSharedNav;