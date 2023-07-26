import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProductInfo.css'

const ProductInfo = () => {
    const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    thumbnailPosition: 'left',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    thumbnailPosition: 'left',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    thumbnailPosition: 'left',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    thumbnailPosition: 'left',
  },
];
    return (
        <div>           
      <div className="container w-5/12 p-5 slider">
      <ImageGallery
        className="w-96"
        items={images}
        showFullscreenButton={true}
        autoplay={true}
        thumbnailPosition='left'
        showPlayButton={false}
        slideOnThumbnailOver={true}
        autoPlay={true}
        lazyLoad={true}
      >

        samaul
      </ImageGallery>
    </div>
        </div>
    );
};

export default ProductInfo;
