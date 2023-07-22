import { Rating } from "@smastrom/react-rating";


const CardRating = ({item}) => {

    const{rating}= item;

    return (
        <div className="flex">
          <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                            className=" my-1"
                        />
                        <span className="pl-1 opacity-40 font-semibold"> | {rating}</span>
        </div>
    );
};

export default CardRating;