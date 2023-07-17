
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const DoesWorkSlider = () => {
    return (
        <div className='flex items-center justify-center'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,

                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-96 mySwiper"
            >
                <SwiperSlide>
                    <img src="https://www.brandlly.com/assets/landings/assets/images/works/scan.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.brandlly.com/assets/landings/assets/images/works/pay.svg" className='mb-10' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.brandlly.com/assets/landings/assets/images/works/leave.svg" alt="" />
                </SwiperSlide>

            </Swiper>


        </div >
    );
};

export default DoesWorkSlider;