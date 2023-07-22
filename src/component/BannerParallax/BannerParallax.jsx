import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const BannerParallax = ({bannerimg}) => {
    console.log(bannerimg)
    return (
        <div>
             <div className="w-full  hero px-3 h-70 lg:px-14">
            <ParallaxBanner
                layers={[{ image:bannerimg, speed: 15 }]}
                className="aspect-[2/1] rounded-xl w-full h-60 "
            />
        </div>
        </div>
    );
};

export default BannerParallax;