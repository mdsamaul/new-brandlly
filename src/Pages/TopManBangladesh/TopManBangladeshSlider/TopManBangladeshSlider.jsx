import { useRef } from 'react';
// Import Swiper React components
import ContentZoom from 'react-content-zoom';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@smastrom/react-rating/style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Rating } from '@smastrom/react-rating';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const TopManBangladeshSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='w-60 border my-5 mx-10'>



            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper z-10"
            >
                <SwiperSlide>
                    <div className="shadow-xl">
                        <figure>
                            <div className="cursor-zoom-in">
                                <ContentZoom zoomPercent={350}
                                    largeImageUrl="https://brandlyimagedev-resized.s3.ap-southeast-1.amazonaws.com/large_topman-bangladesh-0400700345-623.jpg"
                                    imageUrl="https://brandlyimagedev-resized.s3.ap-southeast-1.amazonaws.com/large_topman-bangladesh-0400700345-623.jpg"
                                    contentHeight={300}
                                    contentWidth={240}


                                />
                            </div>
                        </figure>

                    </div>
                </SwiperSlide>







                <div className="autoplay-progress  w-80 h-20">

                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>

                </div>
                <div className='rating-section border w-40 h-10 bottom-6 left-3 rounded bg-opacity-50 bg-slate-300'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={3}
                        readOnly

                    /> <span className='font-normal text-yellow-400 pl-2'>| 3.8</span>
                </div>
            </Swiper>


        </div>
    );
};

export default TopManBangladeshSlider;