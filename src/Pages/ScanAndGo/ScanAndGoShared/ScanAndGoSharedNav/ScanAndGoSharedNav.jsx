import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { Link } from "react-router-dom";

const ScanAndGoSharedNav = () => {
    const [isOpen, setOpen] = useState(false)


    const navItems = <>
        <div >
            <div className={`absolute sm:z-0 py-5  md:static duration-700 w-full md:flex md:justify-end left-0  ${isOpen ? 'top-20' : ' -top-96  '}`}>

                <li><Link to='/' className="hover:text-black duration-500 text-md text-white px-3" style={{ fontWeight: '400' }}>Shop</Link></li>
                <li><Link to='/scan&go' className="hover:text-[#1e070d] duration-500 text-md text-white px-3" style={{ fontWeight: '400' }}>Scan & Go</Link></li>
                <li><Link to='/retailers' className="hover:text-black duration-500 text-md text-white px-3" style={{ fontWeight: '400' }}>Retailers</Link></li>
                <li><Link to='/advertise' className="hover:text-black duration-500 text-md text-white px-3" style={{ fontWeight: '400' }}>Advertise</Link></li>

            </div>
        </div>
        <div className="flex items-center z-50  gap-4 ml-8">
            <li><Link to='/singin' className="text-[#fff] font-semibold underline hover:text-slate-950 duration-500">Sing in</Link></li>
            <li><Link to='/advertise'><button className="rounded-md hover: btn-outline hover:bg-transparent hover:text-[#fff] hover:border hover:border-white duration-500 text-md bg-[#fff] text-black" style={{ height: '36px', width: '96px' }}>Get Started</button></Link></li>
        </div>
        <div className='lg:hidden'>
            <Hamburger Sling toggled={isOpen} toggle={setOpen} />
        </div>

    </>
    console.log(isOpen);

    return (

        <div className="flex max-w-6xl mx-auto justify-between px-3 py-12 items-center w-full h-20 ">
            <div className='sm:z-50'><img src="https://i.ibb.co/7QWnQz6/Brandlly-Transparent.png" className="w-28 h-10 lg:w-64 lg:h-16 bg-transparent" alt="" /></div>
            <div>
                <ul className=" flex items-center w-full lg:w-auto">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};


export default ScanAndGoSharedNav;