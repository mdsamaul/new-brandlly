import { ParallaxBanner } from "react-scroll-parallax";

const BannerParallax = () => {
    return (
        <div className="w-full  hero px-3 h-70 lg:px-14">
            <ParallaxBanner
                layers={[{ image: 'https://www.brandlly.com/storage/banner/62b9890cc2f99.jpg', speed: 15 }]}
                className="aspect-[2/1] rounded-xl w-full h-60 "
            />
        </div>
    );
};

export default BannerParallax;