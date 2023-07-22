
import { useEffect } from 'react';
import { useState } from 'react';

const Hooks = () => {
    const [items, SetItems] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => SetItems(data))
            .catch(error => console.log(error))

    }, []);

    
    return items
};

export default Hooks;