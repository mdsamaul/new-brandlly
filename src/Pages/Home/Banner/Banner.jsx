
const Banner = () => {
    return (
        <div>
            <div className="hidden md:block">
                <img src="https://www.brandlly.com/assets/images/web-cover.png" className="rounded-lg" alt="" />
            </div>
            <div className="block md:hidden">
                <img src="https://www.brandlly.com/assets/images/responsive-mobile-cover.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;