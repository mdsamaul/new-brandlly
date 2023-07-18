import { useEffect, useState } from 'react';
// Import Swiper React components
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Grid, Navigation } from 'swiper/modules';


const OurPartnersSlider = () => {
    const [ourPartners, setOurPartners] = useState([]);
    useEffect(() => {
        fetch('partners.json')
            .then(res => res.json())
            .then(data => setOurPartners(data))
            .catch(error => console.log(error))
    }, []);
    // console.log(ourPartners);
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                slidesPerView={4}
                grid={{
                    rows: 1,
                }}
                scrollbar={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                // modules={[Grid, Autoplay]}
                modules={[Autoplay, Grid, Navigation]}
                className="h-40 border mySwiper"
            >
                {
                    ourPartners.map(ourPartner => <SwiperSlide key={ourPartner} >
                        <img src={ourPartner.image} alt='#' />
                    </SwiperSlide>)
                }


            </Swiper>
            <div className="mt-8 text-center ">
                <Link to="#"> <button type="btn" className="btn w-64 bg-[#c32148] text-white hover:border hover:border-[#c32148] hover:text-[#c32148] hover:gap-x-3"  >See All {ourPartners.length} Partners <FaLongArrowAltRight />
                </button></Link>
            </div>
        </div>
    );
};

export default OurPartnersSlider;




// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/navigation';


// // import required modules


// const OurPartnersSlider = () => {
//     return (
//         <div>
//             <Swiper


//                 navigation={true}
//                 // modules={[Navigation]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default OurPartnersSlider;