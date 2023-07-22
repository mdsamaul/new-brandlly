import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "https://cdn.skypack.dev/react-dom@17.0.1";

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


import Slick from "https://cdn.skypack.dev/react-slick@0.28.1";

import "./CardProductImages.css"
// import CardSliderImages from "./CardSliderImages/CardSliderImages";
import InnerImageZoom from "react-inner-image-zoom";


const CardProductImages = ({item}) => {


const {displayimageone, displayimagetwo, displayimagethree, displayimagefour}= item;
// const {displayimageone,displayimagetwo, displayimagethree, displayimagefour}=item;


   

    return (
        <div>
         

<Slick dots={true}>
        
  
    <InnerImageZoom
      src={displayimageone}
      zoomSrc={displayimageone}
      fullscreenOnMobile={true}
      zoomType="hover"
  zoomPreload={true}
    />    
    <InnerImageZoom
      src={displayimagetwo}
      zoomSrc={displayimagetwo}
      fullscreenOnMobile={true}
      zoomType="hover"
  zoomPreload={true}
    /> 
    <InnerImageZoom
      src={displayimagethree}
      zoomSrc={displayimagethree}
      fullscreenOnMobile={true}
      zoomType="hover"
  zoomPreload={true}
    /> 
    <InnerImageZoom
      src={displayimagefour}
      zoomSrc={displayimagefour}
      fullscreenOnMobile={true}
      zoomType="hover"
  zoomPreload={true}
    /> 
  </Slick>

      
    </div>
    );
};

export default CardProductImages;

