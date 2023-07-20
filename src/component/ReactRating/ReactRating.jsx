import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ReactRating = () => {
    return (
        <Rating
          style={{ maxWidth: 180 }}
          value={3}
          readOnly
        />
      );
};

export default ReactRating;