import { Link } from "react-router-dom";
import ScrollTopBtn from "./ScrollTopBtn/ScrollTopBtn.jsx";

const Footer = () => {
    return (
        <div className="relative">
            <footer className="footer px-10 py-20 bg-base-200">

                <div className="flex w-full justify-between">
                    <div className="flex justify-between lg:w-1/2 ">
                        <div>
                            <span className="footer-title">Brandlly</span>
                            <ul>
                                <li><Link to='#' className="link link-hover">About</Link></li>
                                <li><Link to='#' className="link link-hover">Contact</Link></li>
                                <li><Link to='#' className="link link-hover">Blog</Link></li>
                                <li><Link to='#' className="link link-hover">Download App</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="footer-title">Partners</span>
                            <ul>
                                <li> <Link to='#' className="link link-hover">Technical Support</Link></li>
                                <li><Link to='#' className="link link-hover">API documentaltion</Link></li>
                                <li><Link to='#' className="link link-hover">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 px-32">
                        <span className="footer-title">Connect with us</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Subscribe for Brandlly articles and news</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full h-10 pr-16" />
                                <li><Link to='/'><button className="absolute top-0  right-0 rounded-l-none hover: btn-outline hover:bg-[#c32148] border  border-[#c32148] duration-500 text-md bg-[#fff] text-[#c32148]" style={{ height: '36px', width: '96px' }}>Subscribe</button></Link></li>
                                {/* <button className="btn btn-primary absolute top-0 right-0 rounded-l-none"></button> */}
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <ScrollTopBtn></ScrollTopBtn>
        </div>
    );
};

export default Footer;