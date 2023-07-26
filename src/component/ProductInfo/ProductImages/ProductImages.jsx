import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProductImages.css'

const ProductImages = ({item}) => {
  

    
   
    const images = [
  {
    original: `${item.displayimageone}`,
    thumbnail:`${item.displayimageone}`,
    thumbnailPosition: 'left',
  },
  {
    original: `${item.displayimagetwo}`,
    thumbnail:`${item.displayimagetwo}`,
    thumbnailPosition: 'left',
  },
  {
    original: `${item.displayimagethree}`,
    thumbnail:`${item.displayimagethree}`,
    thumbnailPosition: 'left',
  },
  {
    original: `${item.displayimagefour}`,
    thumbnail:`${item.displayimagefour}`,
    thumbnailPosition: 'left',
  },
];
    return (
        <div>           
      <div className="container p-5 slider">
      <ImageGallery
        className=""
        items={images}
        showFullscreenButton={true}
        autoplay={true}
        thumbnailPosition='left'
        showPlayButton={false}
        slideOnThumbnailOver={true}
        autoPlay={true}
        lazyLoad={true}
      >

      </ImageGallery>
    </div>
        </div>
    );
};

export default ProductImages;