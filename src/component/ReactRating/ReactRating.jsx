import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ReactRating = ({rate}) => {
    return (
        <Rating
          style={{ maxWidth: 100 }}
          value={rate}
          readOnly
          className='py-2'
        />
      );
};

export default ReactRating;