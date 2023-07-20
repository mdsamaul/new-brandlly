// Import Swiper React components
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper React components


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import './TopManBangladeshSlider.css';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import TopManBangladeshZoomImage from '../TopManBangladeshZoomImage/TopManBangladeshZoomImage.jsx';


const TopManBangladeshSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className='w-72 container mx-auto rounded-md my-10'>
            <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='block'>
                            <TopManBangladeshZoomImage />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='block'>
                            <TopManBangladeshZoomImage />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='block'>
                            <TopManBangladeshZoomImage />
                        </div>
                    </SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>

                </Swiper>
            </div>






        </>

    );
};

export default TopManBangladeshSlider;