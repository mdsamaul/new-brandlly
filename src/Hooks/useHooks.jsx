
import { useEffect } from 'react';
import { useState } from 'react';

const useHooks = () => {
    const [samaul, Setsamaul] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => Setsamaul(data))
            .catch(error => console.log(error))
setLoader(false)
    }, []);

    
    return [samaul ,loader]
};

export default useHooks;