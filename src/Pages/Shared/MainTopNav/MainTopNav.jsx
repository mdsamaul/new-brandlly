import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { Link } from "react-router-dom";

const MainTopNav = () => {
    const [isOpen, setOpen] = useState(false)


    const navItems = <>
        <div >
            <div className={`absolute sm:z-0 bg-white py-5  md:static duration-700 w-full md:flex md:justify-end left-0  ${isOpen ? 'top-20' : ' -top-96  '}`}>

                <li><Link to='/' className="hover:text-[#c32148] duration-500 text-md text-black px-3" style={{ fontWeight: '400' }}>Shop</Link></li>
                <li><Link to='/scan&go' className="hover:text-[#c32148] duration-500 text-md text-black px-3" style={{ fontWeight: '400' }}>Scan & Go</Link></li>
                <li><Link to='/retailers' className="hover:text-[#c32148] duration-500 text-md text-black px-3" style={{ fontWeight: '400' }}>Retailers</Link></li>
                <li><Link to='/advertise' className="hover:text-[#c32148] duration-500 text-md text-black px-3" style={{ fontWeight: '400' }}>Advertise</Link></li>

            </div>
        </div>
        <div className="flex items-center z-50  gap-4 ml-8">
            <li><Link to='/singin' className="text-[#c32148] font-semibold underline hover:text-slate-950 duration-500">Sing in</Link></li>
            <li><Link to='/getstart'><button className="rounded-md hover: btn-outline hover:bg-white hover:text-[#c32148] hover:border hover:border-red-600 duration-500 text-md bg-[#c32148] text-white" style={{ height: '36px', width: '96px' }}>Get Started</button></Link></li>
        </div>
        <div className='lg:hidden'>
            <Hamburger Sling toggled={isOpen} toggle={setOpen} />
        </div>

    </>
    console.log(isOpen);

    return (

        <div className="flex max-w-6xl mx-auto justify-between px-3 py-12 items-center w-full h-20  bg-white">
            <div className='sm:z-50 bg-white'><img src="https://www.brandlly.com/assets/landings/assets/images/Brandlly-logo.png" className="w-28 h-10 lg:w-64 lg:h-16 " alt="" /></div>
            <div>
                <ul className=" flex items-center w-full lg:w-auto">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default MainTopNav;