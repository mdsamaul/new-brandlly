import { Rating } from "@smastrom/react-rating";


const CardRating = ({item}) => {

    const{rating}= item;

    return (
        <div>
          <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                            className=" my-1"
                        />
        </div>
    );
};

export default CardRating;