import { SwiperSlide } from "swiper/react";

const OurPartnerSliderDetails = ({ ourPartner }) => {
    return (
        <SwiperSlide>
            <img src={ourPartner.image} />
        </SwiperSlide>
    );
};

export default OurPartnerSliderDetails;