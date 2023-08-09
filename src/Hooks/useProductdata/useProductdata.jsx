import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../component/Shared/Loader/Loader";


const useProductdata = () => {
   
    const [params , setParams]=useSearchParams();
    const productId = params.get('productId');
    // console.log('samau url ', productId);
    const [loader, setLoader]=useState(false);


    const [items, SetItems] = useState([]);
    const [filteredItems, setFilteredItems] =useState([]);

    useEffect(() => {
    setLoader(true);
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
        if(productId){

            const filtered = data.filter(product => product.id == productId)
      
            setFilteredItems(filtered)
        }
        else {
            SetItems(data)
          }
  
          setLoader(false)
        })
        .catch(err => console.log(err))
    }, [productId])
  
    if (loader) {
      return <Loader />
    }

    
    return [items , filteredItems] ;
};


export default useProductdata;