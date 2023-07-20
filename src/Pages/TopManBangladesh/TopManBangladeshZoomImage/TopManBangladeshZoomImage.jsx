import { Rating } from '@smastrom/react-rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const TopManBangladeshZoomImage = () => {
    return (
        <div >
            <div className=' relative'>

                <InnerImageZoom
                    src="https://brandlyimagedev-resized.s3.ap-southeast-1.amazonaws.com/large_topman-bangladesh-0400700345-623.jpg"
                    zoomSrc="https://brandlyimagedev-resized.s3.ap-southeast-1.amazonaws.com/large_topman-bangladesh-0400700345-623.jpg"
                    zoomType="hover"
                    zoomPreload={true}
                    className="rounded-md "
                />
                <div className='absolute flex left-4 border bg-yellow-100 rounded-md bottom-6 px-3 '>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={3}
                        readOnly

                    /> <span className='font-normal text-yellow-400 pl-2 '>| 3.8</span>
                </div>
            </div>
        </div>
    );
};

export default TopManBangladeshZoomImage;