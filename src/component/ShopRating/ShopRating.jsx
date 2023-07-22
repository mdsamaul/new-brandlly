import { Rating } from '@smastrom/react-rating';


const ShopRating = ({rating}) => {
    return (
        <div className='flex items-center'>
            <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                            className=" my-2"
                        />
                        <span className='font-semibold opacity-40 pl-1'>{rating}</span>
        </div>
    );
};

export default ShopRating;