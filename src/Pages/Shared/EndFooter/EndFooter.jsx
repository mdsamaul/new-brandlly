import { Link } from "react-router-dom";

const EndFooter = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <ul className="flex gap-4">
                        <li><Link> <img src="https://www.brandlly.com/assets/landings/assets/images/Brandlly-logo.png" alt="" /></Link></li>
                        <li><Link>Privacy policy</Link></li>
                        <li><Link>Terms of use Trust & Security</Link></li>
                        <li><Link>© 2023 Brandlly</Link></li>

                    </ul>
                </div>
                <div>
                    <div>

                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default EndFooter;