import { Rating } from '@smastrom/react-rating';


const ShopRating = ({rating}) => {
    return (
        <div>
            <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                            className=" my-2"
                        />
        </div>
    );
};

export default ShopRating;